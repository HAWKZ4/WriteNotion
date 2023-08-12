import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  useTitle("CreatePost")
  const postRef = collection(db, "posts");
  const navigate = useNavigate();

  async function handleCreatePost(event) {
    event.preventDefault();


    console.log(auth);
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName
      },
    };
    await addDoc(postRef, document);
    navigate("/")
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          style={{ resize: "none" }}
          className="description"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
