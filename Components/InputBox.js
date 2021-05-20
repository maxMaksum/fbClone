import {useSession,  signOut} from 'next-auth/client'
import Image from 'next/image'

import {CameraIcon, VideoCameraIcon, ImojiHappy, EmojiHappyIcon} from '@heroicons/react/solid'
import InputIcon from './InputIcon'

import {useRef, useState} from 'react'
import {db, storage} from '../firebase'
import firebase from 'firebase'

function InputBox() {
    const  [session] = useSession()

    const [imageToPost, setImageToPost] =useState(null)
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)

    const sendPost = e =>{
        e.preventDefault();
        console.log('ok')
        if(!inputRef.current.value) return
        db.collection('posts')
        .add({
            message:inputRef.current.value,
            name:session.user.name,
            email:session.user.email,
            image:session.user.image,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        })
        
        
        .then(doc=>{

            if(imageToPost){

                // const uploadTask=storage.ref(`posts ${doc.id}`)
                const uploadTask=storage.ref('posts').child(doc.id)
                .putString(imageToPost, "data_url")
                
                removeImage()

                uploadTask.on(

                'state_change',
                null,
                (error) => console.log(error),
                
               ()=>{
                //    when the upload completes,
                    storage.ref('posts').child(doc.id).getDownloadURL()
                    .then(url=>{
                            db.collection('posts').doc(doc.id)
                            .set({
                                postImage:url 
                            },
                            {merge: true}
                    )})
                }

                )
            }    
        })

        inputRef.current.value=""
    }

  

    const addImageToPost =(e) =>{
        e.preventDefault();
        console.log('ok image')
        const reader = new FileReader();
        if(e.target.files[0])
        {reader.readAsDataURL(e.target.files[0])}
        reader.onload =(readerEvent) =>{
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = (e) =>{
       
        setImageToPost(null)
    }
    return (
      <div className="bg-white p-2 rounded-2xl shadow-md font-md mt-6">
        <div className="flex items-center space-x-4 p-4">
          <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout={"fixed"}
          />
          <form className="flex flex-grow">
            <input
              ref={inputRef}
              type="text"
              placeholder={`Whats on your mind ${session.user.name}`}
              className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            />
            <button onClick={sendPost} className="hidden">
              {" "}
              Submit
            </button>
            {imageToPost && (
              <div onClick ={removeImage} className="flex flex-col
              filter hover:brighteness-110
              transition duration-150 transform hover:[scale-105]
              cursor-pointer"
              
              >
                <img src={imageToPost} className="h-10 object-contain" />
                <p className="text-xs text-red-500 text-center">Remove</p>
              </div>
            )}
          </form>
        </div>
        <div>
          <div className="flex  justify-evenly p-3 border-t w-full p-3">
            <div className="text-red-500">
              <InputIcon Icon={VideoCameraIcon} title={"Live Video"} />
            </div>
            <div
              onClick={() => filePickerRef.current.click()}
              className="text-green-500"
            >
              <InputIcon
                Icon={CameraIcon}
                title={"Photo / Video"}
                active="green"
              />
              <input
                ref={filePickerRef}
                onChange={addImageToPost}
                type="file"
                hidden
              />
            </div>

            <div className="text-yellow-300">
              <InputIcon
                Icon={EmojiHappyIcon}
                title={"Feeling Happy Now"}
                active="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default InputBox
