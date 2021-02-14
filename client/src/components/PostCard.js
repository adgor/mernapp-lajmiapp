import React from "react";

const PostCard = ({ filtered }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 ">
        <tr className="sticky top-0">
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Fan Page
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Titulli i Postit
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Like
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Comments
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Shares
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            data
          </th>
          <th className="relative px-6 py-3">
            <span className="sr-only">shiko</span>
          </th>
        </tr>
      </thead>

      {filtered.map((post) => (
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr>
            <td className="px-6 py-2">
              <h4 className="text-sm text-gray-900   ">{post.pname}</h4>
            </td>
            <td className="px-6 py-2">
              <h4 className="font-semibold truncate w-96 text-gray-900   ">
                {post.title}
              </h4>
            </td>
            <td className="px-6 py-2 ">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {post.like}
              </span>
            </td>
            <td className="px-6 py-2 text-sm text-gray-500">{post.comment}</td>
            <td className="px-6 py-2 text-sm text-gray-500">{post.shares}</td>
            <td className="px-6 py-2 whitespace-nowrap">
              <div className="text-sm text-gray-900">{post.time}</div>
              <div className="text-sm text-gray-500">Updated: {post.stime}</div>
            </td>
            <td className="px-6 py-2 text-right text-sm font-medium">
              <a
                href={post.link}
                target="_blank"
                className="text-indigo-600 hover:text-indigo-900"
              >
                Shiko
              </a>
            </td>
          </tr>
        </tbody>
      ))}

      {/* 
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 ">
            <div className="text-sm text-gray-900"> {post.pname}</div>
          </td>
          <td className="px-6 py-4 truncate w-1/5">
            <h4 className="  font-semibold text-gray-900   ">{post.title}</h4>
          </td>
          <td className="px-6 py-4 ">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {post.like}
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">{post.comment}</td>
          <td className="px-6 py-4 text-right text-sm font-medium">
            <a href={post.link} className="text-indigo-600 hover:text-indigo-900">
              Shiko
            </a>
          </td>
        </tr>
      </tbody>
    */}
    </table>

    // <div className="p-10 md:w-1/2 lg:w-1/3 flex flex-col items-start rounded overflow-hidden shadow-lg">

    //       <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">

    //       {post.pname}  </span>

    //       <h4 className=" text-xl font-semibold text-gray-900  mt-4 mb-4 truncate w-11/12">
    //         {post.title}
    //       </h4>
    //       <p className="leading-relaxed ">
    //         <span className="text-indigo-500 font-bold">{post.like} </span> Like{" "}
    //         <br />
    //         <span className=" font-bold">{post.comment} </span>
    //       </p>
    //       <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-indigo-100 mt-auto w-full">
    //         <p className="leading-relaxed text-sm mb-4 mt-4">
    //           <span className=" font-bold ">Publikuar: </span> {post.time}
    //           <br />
    //           <span className=" font-bold">Perditsuar: </span> {post.stime}
    //           <br />
    //         </p>
    //         <a
    //           className="py-4 px-6 inline-flex items-center font-bold justify-center rounded-md border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 transition duration-700 ease-in-out  "
    //           href={post.link}
    //           target="_blank"
    //         >
    //           Shiko postin
    //           <svg
    //             fill="none"
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             className="w-4 h-4 ml-2"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M5 12h14M12 5l7 7-7 7"></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
  );
};

export default PostCard;
