import StoryCard from "./StoryCard"

const stories =[
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


function Stories() {
    return (
        <div className="flex justify-center mx-auto space-x-3">
            {stories.map(story=>(
                <StoryCard 
                key={story.id}
                name={story.name}
                src={story.src}
                profile={story.url}/>
            ))}
            
            
        </div>
    )
}

export default Stories
