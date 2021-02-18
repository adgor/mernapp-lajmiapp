import React, { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import FbPostSearch from "./components/FbPostSearch";
import FbPostSearchByDay from "./components/FbPostSearchByDay";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  // Sort data based Valies of likes
  let likeUp = posts.sort(function (a, b) {
    return parseInt(b.like) - parseInt(a.like);
  });

  // fetch data from api route
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  // get the Date func
  var tempDate = new Date();
  var toDayDate = `${tempDate.getDate()},`;

  // Filter data based on Search
  const filtered = likeUp.filter((post) => {
    return (
      post.pname.toLowerCase().includes(term.toLowerCase()) ||
      post.ptime.toLowerCase().includes(term.toLowerCase()) ||
      post.stime.toLowerCase().includes(term.toLowerCase()) ||
      post.title.toLowerCase().includes(term.toLowerCase())
    );
  });

  // JSX
  return (
    <div className="container  px-5  mx-auto flex flex-col">
      <p className="text-3xl text-center mt-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Lajmi-APP
      </p>
      {/* Search field input component */}
      <FbPostSearch searchText={(text) => setTerm(text)} />
      <div className="  float-right mr-40 mb-4">
        {/* toDays post filter component */}
        <FbPostSearchByDay searchText={() => setTerm(toDayDate)} />
      </div>
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {!isLoading && posts.length === 0 && (
              <div>
                <h1 className="text-5xl text-center mx-auto mt-10">
                  Nuk u gjet asnje Post :/
                </h1>
                <p className="text-xl text-center mx-auto my-8">
                  Rikthehuni pas disa oresh!!!! <br />{" "}
                  <span className=" font-semibold">
                    Ju faleminderit për mirekuptimin!{" "}
                  </span>
                </p>
              </div>
            )}

            {isLoading ? (
              <div>
                <h1 className="text-6xl text-center mx-auto mt-10 leading-8 font-extrabold tracking-tight text-gray-900">
                  Mbushet ...
                </h1>
                <p className="text-xl text-center mx-auto my-8">
                  Po vonohet shume? <br />
                  <span className=" font-semibold">
                    Beni refresh faqen ose kontaktoni administratorin Tuaj!!!
                  </span>
                </p>
              </div>
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
