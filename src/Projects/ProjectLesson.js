import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkCold} from 'react-syntax-highlighter/dist/esm/styles/prism';

const LessonTitle = styled.h1`
    font-family: Futura;
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 50px;
    color: #324158;
`

const MdWrapper = styled.div`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    max-width: 800px;
    margin: 50px auto;
    padding: 10px;
    text-align: left;
    border: solid 1px #ddd;
    border-radius: 5px;
    line-height: 24px;
    code {
        font-size: 14px;
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
        background-color: #eee;
        margin: 2px;
        padding: 0 6px;
        border-radius: 3px;
    }
`
const codeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={coldarkCold} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

function ProjectLesson ({ doc }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(doc)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  });

  return (
      <div>
        <LessonTitle> Learning Note </LessonTitle>
        <MdWrapper>
            <ReactMarkdown children={markdown} components={codeBlock} linkTarget="_blank" />
        </MdWrapper>
      </div>
  );
}

export default ProjectLesson;