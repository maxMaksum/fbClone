import Image from 'next/image'
import {useSession,  signOut} from 'next-auth/client'
import {
BellIcon,
ChatIcon,
ChevronDoubleDownIcon,
HomeIcon,
UserGroupIcon,
ViewGridIcon,


} from "@heroicons/react/solid"

import{
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon'
import HeaderIcon2 from './HeaderIcon2';
function Header() {

  const  [session] = useSession()

  console.log(session)
    return (
      <div className="sticky top-0 flex items-center p-2 lg:px-5 shadow-md">
          {/* left */}

        <div className="flex items-center">
          <Image src="/vercel.svg" width={40} height={40} layout="fixed" />

          <div className="hidden md:inline-flex flex items-center  ml-2 rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input
              className="
                
                flex ml-2 items-center bg-transparent
                outline-none
                placeholder-gray-500
                flex-shrink
                "
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
          {/* center */}

          <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
              <HeaderIcon active Icon={HomeIcon} />
              <HeaderIcon Icon={FlagIcon} />
              <HeaderIcon Icon={PlayIcon} />
              <HeaderIcon Icon={ShoppingCartIcon} />
              <HeaderIcon Icon={UserGroupIcon} />
            </div>
          </div>
          {/* right */}


          <div className="flex items-center justify-end sm:space-x-2">
            <div  className="flex items-center justify-center ">
            {/* profie */}
            <Image
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width="40"
            height="40"
            layout="fixed"
            />
            <p className="whitespace-nowrap font-semibold pr-3 pl-2">{session.user.name}</p>
            <HeaderIcon2 active Icon={HomeIcon} />
            <HeaderIcon2 active Icon={ChatIcon} />
            <HeaderIcon2 active Icon={BellIcon} />
            <HeaderIcon2 active Icon={ChevronDoubleDownIcon} />
            </div>
          </div>

        
      </div>
    );
}

export default Header
