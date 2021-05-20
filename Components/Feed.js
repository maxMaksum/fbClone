import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({posts}) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        
            {/* Stories */}
            <div className="mx-auto max-w-md md:max-w-md lg:max-w-2xl">
            <Stories/>
             {/* Input Box */}
             <InputBox/>
            </div>
           
            {/* Posts */}
            <Posts posts={posts}/>
        </div>
    )
}

export default Feed
