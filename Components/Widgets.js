
import {DotsHorizontalIcon, VideoCameraIcon, SearchIcon} from '@heroicons/react/solid'
import Contact from './Contact'

const MyContacts = [
    {   id:1,
        name:"Max Maksum",
        src:"/max.jpg",
        url:"/max1.jpg"
    },
    { id:2,
        name:"Elon Musk",
        src:"/elon_musk.jpg",
        url:"/elon_musk.jpg"
    },
    { id:3,
        name:"Elon Musk",
        src:"/bill_gates.jpg",
        url:"/bill_gates2.jpg"
    },
    {
        id:4,
        name:"Max Maksum",
        src:"/max.jpg",
        url:"/max1.jpg"
    },
    {
        id:5,
        name:"Elon Musk",
        src:"/elon_musk.jpg",
        url:"/elon_musk.jpg"
    },
    {
        id:6,
        name:"Bill Gate",
        src:"/bill_gates.jpg",
        url:"/bill_gates2.jpg"
    },
    
]

function Widgets() {
    return (
       
      <div className="hidden lg:flex flex-col w-60 p-2 mt-5 items-center">
        <div className="flex justify-between items-center text-gray-500 mb-5">
          <h2 className="text-xl  ">Contact</h2>
          <div className="flex space-x-2">
            <VideoCameraIcon className="h-6" />
            <SearchIcon className="h-6" />
            <DotsHorizontalIcon className="h-6" />
          </div>
        </div>
        {MyContacts.map(contact=>(
            <Contact id={contact.id} name={contact.name} src={contact.src}/>
        ))}
        
      </div>
    
    );
}
 
export default Widgets

