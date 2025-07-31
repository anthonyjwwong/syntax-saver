import React from "react";

interface SnippetCardProps {
  title: string;
  language: string;
  description: string;
  code;
}

const SnippetCard = ({
  title = "JavaScript",
  language = "Python",
  description,
  code,
  tag,
}) => {
  return (
    <div className="border rounded-lg px-6 py-5 border-gray-200 bg-white">
      <div className="flex justify-between">
        {" "}
        <h4>{title}</h4>
        <span className="text-[12px] px-1 py-1 bg-indigo-100 text-indigo-500 rounded-md">
          {language}
        </span>
      </div>

      <p className="text-gray-400 text-[12px]">Created 2 days ago</p>
      <div className="border my-3 bg-black text-white p-4">
        <p>THIS IS WHERE CODE MIRROR CODE GOES </p>
        <p>EBAVFUEFNAOEF</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-600 my-3 px-1">
          This code is use to that code and together we react hook codee code
        </p>
      </div>
      <div className="flex gap-3">
        <p className="bg-gray-100 text-gray-600 rounded-md px-2.5 py-0.5 text-[13px]">
          tag
        </p>
        <p className="bg-gray-100 text-gray-600 rounded-md px-2.5 py-0.5 text-[13px]">
          tag
        </p>
        <p className="bg-gray-100 text-gray-600 rounded-md px-2.5 py-0.5 text-[13px]">
          tag
        </p>
      </div>
    </div>
  );
};

export default SnippetCard;
