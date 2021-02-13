import React, { Component, useState } from "react";
import axios from "axios";
import FbPostSearch from "./components/FbPostSearch";

class App extends Component {
  _renderCounter = () => () => {
    const [term, setTerm] = useState(0);

    return term;
  };

  state = {
    title: "",
    body: "",
    posts: [],
  };

  componentDidMount = () => {
    this.getFbPost();
  };
  css;
  getFbPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been recived!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  displayFbPosts = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div
        className="p-10 md:w-1/2 lg:w-1/3 flex flex-col items-start rounded overflow-hidden shadow-lg"
        key={index}
      >
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          {post.pname}
        </span>

        <h4 className=" text-xl font-semibold text-gray-900  mt-4 mb-4 truncate w-11/12">
          {post.title}
        </h4>
        <p className="leading-relaxed ">
          <span className="text-indigo-500 font-bold">{post.like} </span> Like{" "}
          <br />
          <span className=" font-bold">{post.comment} </span>
        </p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-indigo-100 mt-auto w-full">
          <p className="leading-relaxed text-sm mb-4 mt-4">
            <span className=" font-bold ">Publikuar: </span> {post.time}
            <br />
            <span className=" font-bold">Perditsuar: </span> {post.stime}
            <br />
          </p>
          <a
            className="py-4 px-6 inline-flex items-center font-bold justify-center rounded-md border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 transition duration-700 ease-in-out  "
            href={post.link}
            target="_blank"
          >
            Shiko postin
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const MyInlineHook = this._renderCounter();
    // console.log("State: ", this.state);
    // JSX
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <p className="text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lajmi APP
          </p>
          <FbPostSearch searchText={(text) => MyInlineHook(text)} />
          <div className="flex flex-wrap ">
            {this.displayFbPosts(this.state.posts)}
          </div>
        </div>
      </section>
    );
  }
}
export default App;
