import React, { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
// import FbPostSearch from "./components/FbPostSearch";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  // function search(post) {
  //   return post.filter((post) => post.title.toLowerCase().indexOf(term)) > -1;
  // }

  // console.log(posts[0].title);

  // let search = posts;
  // JSX
  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <p className="text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Lajmi APP
        </p>
        {/* <FbPostSearch searchText={(text) => setTerm(text)} /> */}
        {!isLoading && posts.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            Nuk u gjet anje Post
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32 leading-8 font-extrabold tracking-tight text-gray-900">
            Mbushet ...
          </h1>
        ) : (
          <div className="flex flex-wrap ">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default App;
