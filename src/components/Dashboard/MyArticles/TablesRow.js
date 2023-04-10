import { useRouter } from "next/router";
import React from "react";

function TablesRow(props) {
  const router = useRouter();
  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <td className="w-4 p-4"></td>
      <th scope="row" className="px-6 py-4 whitespace-nowrap">
        {props.name}
      </th>
      <td className="px-6 py-4">{props.genre}</td>
      <td className="px-6 py-4 text-white">
        <button className="bg-yellow p-2 px-3 rounded-lg">
          {props.status}
        </button>
      </td>
      <td className="px-6 py-4">{props.published}</td>
      <td className="px-6 py-4">
        <a
          href={`/api/article?id`}
          className="text-cremeTxt hover:underline mr-3"
        >
          Edit
        </a>
        <button
          onClick={async () => {
            await props.handleDelete(props.articleId),
              router.reload("/dashboard/my-article");
          }}
          className=" text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TablesRow;
