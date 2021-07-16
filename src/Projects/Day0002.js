import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectTitle from './ProjectTitle';
import ProjectLesson from './ProjectLesson';
import file from './Day0002.md';

// mixins
const size = ({w, h}) => `
    width: ${w};
    height: ${h};
`

// keyframes
const anim1 = keyframes`
    0% {
        bottom: 0px;
    }
    50% {
        bottom: 100px;
        background-color: red;
    }
    100% {
        bottom: 0px;
    }
`

const anim2 = keyframes`
    0% {
        bottom: 0px;
        background-color: red;
        transform: rotate(180deg);
    }
    30% {
        background-color: white;
        transform: rotate(0deg);
    }
    50% {
        bottom: 100px;
    }
    70% {
        background-color: white;
        transform: rotate(0deg);
    }
    100% {
        bottom: 0px;
        background-color: red;
        transform: rotate(180deg);
    }
`

const anim3 = keyframes`
    0% {
        bottom: 0px;
    }
    30% {
        transform: scale(1);
    }
    50% {
        bottom: 30px;
        transform: scale(0.5);
    }
    70% {
        transform: scale(1);
    }
    100% {
        bottom: 0px;
    }
`

const anim4 = keyframes`
    0% {
        transform: translateX(0px) translateY(0px);
    }
    20% {
        transform: translateX(50px) translateY(0px);
    }
    40% {
        transform: translateX(50px) translateY(-50px);
    }
    60% {
        transform: translateX(0px) translateY(-50px);
    }
    80% {
        transform: translateX(0px) translateY(0px);
    }
`

const anim5 = keyframes`
    0% {
        transform: skewX(20deg);
        transform-origin: 50% 100%;
    }
    50% {
        transform: skewX(-20deg);
        transform-origin: 50% 100%;
    }
    100% {
        transform: skewX(20deg);
        transform-origin: 50% 100%;
    }
`

// Components
const Box = styled.div`
    ${size({w: "900px", h: "300px" })};
    // margin-top: 100px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border: solid 2px;
    &:hover #b1,&:hover #b2,&:hover #b3,&:hover #b4,&:hover #b5{
        animation-play-state: running;
    }

    
`

const Block = styled.div`
    ${size({w: "50px", h: "50px" })};
    border: solid 2px;
    position: absolute;
    bottom: 0px;

    &#b1 {
        left: 150px;
        animation: ${anim1} 1s infinite;
        animation-play-state: paused;
    }

    &#b2 {
        left: 300px;
        animation: ${anim2} 1s infinite;
        animation-play-state: paused;
    }

    &#b3 {
        left: 450px;
        animation: ${anim3} 1s infinite;
        animation-play-state: paused;
    }

    &#b4 {
        left: 600px;
        animation: ${anim4} 1s infinite;
        animation-play-state: paused;
    }

    &#b5 {
        left: 750px;
        animation: ${anim5} 1s infinite;
        animation-play-state: paused;
    }@keyframes rotate {
    //     100% {
    //       transform: rotate(360deg);
    //     }
    // }

    // 

`




function Day0002() {
    return(
        <div>
            <ProjectTitle id={2} title={`Animation Testing`} />
            <Box>
                <Block id="b1">Move</Block>
                <Block id="b2">Rotate</Block>
                <Block id="b3">Scale</Block>
                <Block id="b4">Square</Block>
                <Block id="b5">Skew</Block>
            </Box>
            <ProjectLesson doc={file} />
        </div>
    );
}

export default Day0002;