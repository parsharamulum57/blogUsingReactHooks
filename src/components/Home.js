import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import {Link} from 'react-router-dom';



function Home() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapShot) => {
            posts = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            })
            console.log(posts);
            setPosts(posts);
        });
    }, [])

    return (
        <div className="home">
            <h1>Tech Blog</h1>
            <div id='blog-container'>Parsh</div>

            {posts.map((post,index) => {
                return (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>
                            {post.title}
                        </h3>
                    </Link>
                    <p>{post.subTitle}</p>
                </div> 
                )   
            })}

        </div>
    );
}

export default Home;
