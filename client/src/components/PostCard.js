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
              <div className="text-sm text-gray-900">{post.ptime}</div>
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
    </table>
  );
};

export default PostCard;
