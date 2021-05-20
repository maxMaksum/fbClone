import {ChatAltIcon, SharedIcon, ThumbUpIcon} from '@heroicons/react/outline'
import InputIcon from './InputIcon'

export default function Footer() {

    return (
      <div>
        {/* Footer of Post */}
        <div className="flex justify-between items-center rounded-2xl shadow-md text-gray-400 border-t">
            <InputIcon Icon={ThumbUpIcon} title={"Like"} className="h-6"/>
        </div>
      </div>
    );
}


// <div className="flex flex-grow p-2 justify-center  items-center space-x-1 hover:bg-gray-100  cursor-pointer rounded-bl-2xl">
// <ThumbUpIcon className="h-4" />
// <p className="text-xs sm:text-base">Like</p>
// </div>
// <div>
// <ChatAltIcon className="h-4" />
// <p className="text-xs sm:text-base">Comment</p>
// </div>
// <div>
// <SharedIcon className="h-4" />
// <p className="text-xs sm:text-base">Share</p>
// </div>