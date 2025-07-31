"use client";
import React, { useState, useEffect } from "react";
import SnippetCard from "./SnippetCard";
const SnippetsContainer = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      const res = await fetch("/api/snippets");
      const data = await res.json();
      setSnippets(data.snippets || []);
    } catch (error) {
      console.error("Fail to fetch snippets from DB:", error);
    }
  };

  console.log("snippets", snippets);

  return (
    <div className="mt-6  w-full flex flex-col gap-6">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} title={snippet.title} />
      ))}
    </div>
  );
};

export default SnippetsContainer;
