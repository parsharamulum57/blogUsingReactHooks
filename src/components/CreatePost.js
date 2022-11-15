
import { useFormInput } from "../customHooks";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 



 function CreatePost() {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');


    async function handleFormSubmit(event) {
        event.preventDefault();
        console.log('title ', title);
        console.log('sub title ', subTitle);
        console.log('content ', content);

        const docRef = await addDoc(collection(db, "posts"), {
            title:title.value,
            content:content.value,
            subTitle:subTitle.value,
            createdAt: new Date()
          });
          console.log("Document written with ID: ", docRef.id);
          

    }

    return (
        <div className="">
            <form id="post-form" onSubmit={handleFormSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle} />
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>

                <button>Create Post</button>

            </form>
        </div>
    );
}

export default CreatePost;
