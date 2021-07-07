import React, {useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'
import styled from 'styled-components';
import ProjectTitle from './ProjectTitle';
import file from './Day0001.md';


const NameCard = styled.div`
    width: 350px;
    height: 200px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    font-family: Futura;
    text-align: left;
    background-color: #eee;
    position: relative;
    color: #666;
    overflow: hidden;
    border-radius: 5px;
    border: solid 1px rgba(0,0,0,0.1);
    box-shadow: 0px 25px 15px -20px rgba(0,0,0,0.2);
    transition-duration: 0.5s;
    :hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 10px 35px 15px -20px rgba(0,0,0,0.3);
        & .c1 {
            transform: scale(1.2);
        }
        & .c2 {
            transform: scale(1.3);
        }
    }
`

const Name = styled.h2`
    font-size: 22px;
`

const Title = styled.h3`
    font-size: 14px;
    color: ${props => props.theme.accent};
`

const Intro = styled.p`
    font-size: 12px;
    line-height: 18px;
`

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    transition-duration: 0.5s;
    &.c1 {
        right: 100px;
        background-color: ${props => props.theme.accent};
    }
    &.c2 {
        width: 60px;
        height: 60px;
        right: -30px;
        top: -30px;
        border: solid 3px ${props => props.theme.accent};
    }
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
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
        background-color: #eee;
        margin: 2px;
        padding: 0 6px;
        border-radius: 3px;
    }
`

const LessonTitle = styled.h1`
    font-family: Futura;
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 50px;
    color: #324158;
`


Title.defaultProps = {
    theme: {
      background: "#324158",
      primary: "#F9D574",
      secondary: "#FFA77A",
      accent: "#FA716C"
    }
  }

Circle.defaultProps = {
    theme: {
      background: "#324158",
      primary: "#F9D574",
      secondary: "#FFA77A",
      accent: "#FA716C"
    }
  }

function Day0001() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);
    
    return(
        <div>
            <ProjectTitle id={1} title={`Name Card`} />
            <NameCard>
                <Name>Debbie Chen</Name>
                <Title>UI Developer | Human Computer Interaction</Title>
                <hr></hr>
                <Intro>Transmitting and manipulating information with innovative technologies is the most exciting thing to me. I enjoyed using different media(websites, games, XR) to produce intriguing content to convey information.</Intro>
                <Circle className="c1" ></Circle>
                <Circle className="c2" ></Circle>
            </NameCard>
            <LessonTitle> Learning Note </LessonTitle>
            <MdWrapper>
                <ReactMarkdown children={markdown} linkTarget="_blank" remarkPlugins={[gfm]} rehypePlugins={[rehypeHighlight]}  />
            </MdWrapper>
        </div>
    )
};

export default Day0001;