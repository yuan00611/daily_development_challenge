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
`

function Day0003() {
    return(
        <div>
            <ProjectTitle id={3} title={`SVG Animation Testing`} />
            <Pic1 viewBox="-50 -50 100 100">
                <line x1="-20" y1="0" x2="20" y2="0" />
                <line x1="0" y1="-20" x2="0" y2="20" />
                <circle cx="0" cy="0" r="10" />
            </Pic1>
            <Pic2 viewBox="-50 -50 100 100">
                <circle cx="0" cy="0" r="10" />
                <line x1="-20" y1="0" x2="20" y2="0" />
                <line x1="0" y1="-20" x2="0" y2="20" />
                <rect x="-20" y="-20" width="40" height="40" />
            </Pic2>
            <Pic3 viewBox="0 0 200 200">
                <circle cx="0" cy="50" r="3" />
                <circle cx="50" cy="80" r="3" />
                <circle cx="100" cy="60" r="3" />
                <circle cx="150" cy="20" r="3" />
                <circle cx="200" cy="40" r="3" />
                <polyline points="0,50 50,80 100,60 150,20 200,40" />
            </Pic3>
            <Pic4 viewBox="0 0 200 200">
                <rect x="0" y="0" width="20" height="100" />
                <rect x="30" y="0" width="20" height="120" />
                <rect x="60" y="0" width="20" height="140" />
                <rect x="90" y="0" width="20" height="160" />
                <rect x="120" y="0" width="20" height="180" />
                <rect x="150" y="0" width="20" height="150" />
                <rect x="180" y="0" width="20" height="120" />
            </Pic4>
            <Pic5 viewBox="-50 -40 100 100">
                <rect x="-30" y="-20" width="60" height="40" />
                <rect x="-25" y="-15" width="50" height="30" />
                <rect x="-2" y="20" width="4" height="10" />
                <rect x="-10" y="30" width="20" height="5" />
                <line x1="-20" y1="0" x2="-8" y2="0" />
                <line x1="-20" y1="5" x2="-5" y2="5" />
                <circle cx="10" cy="0" r="7" />
                <text x="-30" y="50" >My Computer</text>
            </Pic5>
        </div>
    );

};

export default Day0003;