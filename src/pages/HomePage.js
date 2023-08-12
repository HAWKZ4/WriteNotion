import { useEffect, useState, useRef } from "react";  // eslint-disable-line
import { PostCard, SkeletonCard } from "../components/index";
import { collection, getDocs } from "firebase/firestore";  // eslint-disable-line
import { db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  useTitle("HomePage");

  const [posts, setPosts] = useState(new Array(4).fill(false));  // eslint-disable-line
  const [toggle, setToggle] = useState(false);

  const postsRef = useRef(collection(db, "posts")).current;   // eslint-disable-line


  // useEffect(() => {
  //   async function getPosts() {
  //     const data = await getDocs(postsRef);
  //     setPosts(
  //       data.docs.map((document) => ({ ...document.data(), id: document.id }))
  //     );
  //   }
  //   getPosts();
  //   console.log("HELLO");
  // }, [toggle, postsRef]);

  return (
    <section>
      {posts.map((post , index) => (
        post ?<PostCard
        key={post.id}
        post={post}
        toggle={toggle}
        setToggle={setToggle}
      /> :<SkeletonCard key={index}/>
      ))}
    </section>
  );
};
