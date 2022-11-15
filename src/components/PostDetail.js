import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';



function PostDetail() {
    let [post, setPost] = useState({});
    const {postId}=useParams();

    useEffect(() => {
        async function getPost() {
            const docRef = doc(db, "posts", postId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                post = docSnap.data();

                setPost(post);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return [];
            }
        }
        getPost();

    }, []);

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
