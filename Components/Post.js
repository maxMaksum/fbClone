import Image from 'next/image'
import {ChatAltIcon, SharedIcon, ThumbUpIcon} from '@heroicons/react/outline'
import Widgets from './Widgets'
import Footer from './Footer'
function Post({id, name, image, email, message, postImage,timestamp}) {

    console.log(postImage&&postImage)

    const myurl = postImage? postImage:"/max.jpg"
    return (
      <div className="flex flex-col">
        <div className="p-2 bg-white mt-5 rounded-t-2xl shadow-xl">
          <div className="flex items-center space-x-2 ">
            <img src={image} className="rounded-full" width={40} height={40} />
            <div>
              <p className="font-medium">{name} </p>
              <p className="text-xs text-gray-900">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="pt-4">{message}</p>
        </div>

       
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={myurl} objectFit="cover" height={"300"} width={"300"} />
          </div>
       

      <div>
          <Footer/>
      </div>
      </div>
    );
}

export default Post
