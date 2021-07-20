import React from 'react';
import styled from 'styled-components';
import ProjectTitle from './ProjectTitle';
// import ProjectLesson from './ProjectLesson';

const Pic1 = styled.svg`
    width: 240px;
    border: solid 2px;
    stroke: black;
    stroke-width: 3px;
    & circle{
        fill: white;
    }
`

const Pic2 = styled.svg`
    width: 240px;
    border: solid 2px;
    stroke: black;
    stroke-width: 3px;
    & circle{
        fill: white;
    }
    & rect{
        fill: none;
    }
`

const Pic3 = styled.svg`
    width: 240px;
    border: solid 2px;
    stroke: black;
    stroke-width: 3px;
    & polyline {
        fill: none;
    }
`

const Pic4 = styled.svg`
    width: 240px;
    border: solid 2px;
`

const Pic5 = styled.svg`
    width: 240px;
    border: solid 2px;
    stroke: black;
    stroke-width: 2px;
    fill: none;
    * {
        transform-box: fill-box;
    }
    & circle {
        fill: red;
        stroke: none;
    }
    & text {
        fill: black;
        stroke: none;
        font-family: Futura;
        font-size: 10px;
    }
    .frame_outer,.frame_inner,.neck,.bottom{
        transform: scale(0);
        transform-origin: bottom center;
        transition-duration: 0.5s;
        transition-delay: 0.5s;
    }
    .screen_content{
        opacity: 0;
        transition-duration: 0.5s;
        transition-delay: 0s;
    }
    &:hover {
        
        .frame_outer,.frame_inner,.neck,.bottom {
            transform: scale(1);
            transition-delay: 0s;
        }
        .screen_content{
            opacity: 1;
            transition-delay: 0.5s;
        }
    }
`

function Day0003() {
    return(
        <div>
            <ProjectTitle id={3} title={`SVG Animation Testing`} />
            <Pic1 viewBox="-50 -50 100 100">
                <line x1="-20" y1="0" x2="20" y2="0" />
                <line x1="0" y1="-20" x2="0" y2="20" />
                <circle cx="0" cy="0" r="10">
                    <animate attributeName="r" dur="2s" values="10;20;10" repeatCount="indefinite" />
                </circle>
            </Pic1>
            <Pic2 viewBox="-50 -50 100 100">
                <circle cx="0" cy="0" r="10" />
                <g>
                    <line x1="-20" y1="0" x2="20" y2="0" />
                    <line x1="0" y1="-20" x2="0" y2="20" />
                    <rect x="-20" y="-20" width="40" height="40" />
                    <animateTransform attributeName="transform" dur="2s" type="rotate" values="0;360" repeatCount="indefinite" />
                </g>
                
            </Pic2>
            <Pic3 viewBox="0 0 200 200">
                <circle cx="0" cy="50" r="3">
                    <animate attributeName="cy" dur="2s" values="50;40;50" repeatCount="indefinite"/>
                </circle>
                <circle cx="50" cy="80" r="3">
                    <animate attributeName="cy" dur="2s" values="80;100;80" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="60" r="3">
                    <animate attributeName="cy" dur="2s" values="60;30;60" repeatCount="indefinite"/>
                </circle>
                <circle cx="150" cy="20" r="3">
                    <animate attributeName="cy" dur="2s" values="20;50;20" repeatCount="indefinite"/>
                </circle>
                <circle cx="200" cy="40" r="3">
                    <animate attributeName="cy" dur="2s" values="40;10;40" repeatCount="indefinite"/>
                </circle>
                <polyline points="0,50 50,80 100,60 150,20 200,40">
                    <animate attributeName="points" dur="2s" repeatCount="indefinite" values="0,50 50,80 100,60 150,20 200,40;0,40 50,100 100,30 150,50 200,10;0,50 50,80 100,60 150,20 200,40" />
                </polyline>
                
            </Pic3>
            <Pic4 viewBox="0 0 200 200">
                <rect x="0" y="0" width="20" height="100" >
                    <animate attributeName="height" begin="-0.3" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
                <rect x="30" y="0" width="20" height="120" >
                    <animate attributeName="height" begin="-0.6" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
                <rect x="60" y="0" width="20" height="140" >
                    <animate attributeName="height" begin="-0.9" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
                <rect x="90" y="0" width="20" height="160" >
                    <animate attributeName="height" begin="-1.2" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
                <rect x="120" y="0" width="20" height="180" >
                    <animate attributeName="height" begin="-1.5" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
                <rect x="150" y="0" width="20" height="150" >
                    <animate attributeName="height" begin="-1.8" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
                <rect x="180" y="0" width="20" height="120" >
                    <animate attributeName="height" begin="-2.1" dur="2s" values="100;200;100" repeatCount="indefinite" />
                </rect>
            </Pic4>
            <Pic5 viewBox="-50 -40 100 100">
                <rect className="frame_outer" x="-30" y="-20" width="60" height="40" />
                <rect className="frame_inner" x="-25" y="-15" width="50" height="30" />
                <rect className="neck" x="-2" y="20" width="4" height="10" />
                <rect className="bottom" x="-10" y="30" width="20" height="5" />
                <g className="screen_content">
                    <line x1="-20" y1="0" x2="-8" y2="0" />
                    <line x1="-20" y1="5" x2="-5" y2="5" />
                    <circle cx="10" cy="0" r="7" />
                </g>
                <text className="text" x="-30" y="50" >My Computer</text>
            </Pic5>
        </div>
    );

};

export default Day0003;