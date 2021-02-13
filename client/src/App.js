import React, { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import FbPostSearch from "./components/FbPostSearch";

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

  const filtered = posts.filter((post) => {
    return (
      post.pname.toLowerCase().includes(term.toLowerCase()) ||
      post.time.toLowerCase().includes(term.toLowerCase()) ||
      post.stime.toLowerCase().includes(term.toLowerCase()) ||
      post.title.toLowerCase().includes(term.toLowerCase())
    );
  });

  // JSX
  return (
    <div class="container  px-5  mx-auto flex flex-col">
      <p className="text-3xl text-center mt-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Lajmi-APP
      </p>
      <FbPostSearch searchText={(text) => setTerm(text)} />
      <div class="-my-2 sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block  sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {!isLoading && posts.length === 0 && (
              <h1 className="text-5xl text-center mx-auto my-32">
                Nuk u gjet anje Post
              </h1>
            )}

            {isLoading ? (
              <h1 className="text-6xl text-center mx-auto my-14 leading-8 font-extrabold tracking-tight text-gray-900">
                Mbushet ...
              </h1>
            ) : (
              <div className="flex flex-wrap ">
                {<PostCard filtered={filtered} />}

                {/* {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
