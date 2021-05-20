import { useCollection } from 'react-firebase-hooks/firestore';

import Post from './Post'

import {db} from '../firebase'

function Posts() 
{
    const [newPosts, loading, error]=useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')

    )

 
    return (
        <div>
            {newPosts && newPosts.docs.map(post=>(

             
                <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postI
                
                />
            ))}
            
        </div>
    )
}

export default Posts
