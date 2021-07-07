import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import file from "./Day0001.md";

function ProjectLesson () {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
      <ReactMarkdown source={markdown} />
  );
}

export default ProjectLesson;