import React from 'react';
import styled from 'styled-components';

const WorkCard = styled.svg`
    
    :hover #intro{
        fill-opacity: 1;
        opacity: 1;
    }
    :hover #image{
        fill: #587CB4;
        fill-opacity: 0.7;
    }
    margin: 10px;
    max-width:350px;
    max-height:350px;
    font-family: Futura;
    .r{
        fill: #C4C4C4;
        rx: 10;
    }
    #image{
        transition: 0.7s;
        fill-opacity: 1;
        :hover {
            fill-opacity: 0.8;
        }
    }
    div{

        font-size: 22px;
        color: white;
        text-align: left;
    }
    #intro{
        transition: 0.7s;
        fill-opacity: 0;
        opacity: 0;
    }
    
`

function Work(){
    return(
        <a href="https://yuan00611.github.io/">
            <WorkCard viewBox="-50 -50 440 400">
                <rect class="r" x="-50" y="-25" width="440" height="83" />
                <text x="180" y="30" textAnchor="middle" fontSize="30px" fontWeight="600" fill="#587CB4" >Day1</text>
                <rect x="5" y="-50" width="30" height="50" rx="13" fill="#587CB4" />
                <rect x="155" y="-50" width="30" height="50" rx="13" fill="#587CB4" />
                <rect x="305" y="-50" width="30" height="50" rx="13" fill="#587CB4" />
                
                <rect class="r" id="image" x="-50" y="70" width="440" height="280" />
                <g id="intro">
                    
                    <text x="180" y="110" textAnchor="middle" fontSize="26px" fontWeight="600" fill="#F9D574" >Lorem ipsum</text>
                    <foreignObject x="-25" y="120" width="395" height="100">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            Lorem ipsum dolor sit amet, consect adipiscing elit. Risus ut semper diam sit.
                        </div>
                    </foreignObject>
                </g>
                
                {/* <text x="5" y="140" textAnchor="left" fontSize="24px" fill="#F9D574" width="100px" >Lorem ipsum dolor sit amet, consect adipiscing elit. Risus ut semper diam sit. </text> */}
                

                <rect x="305" y="280" width="100" height="85" rx="60" fill="#587CB4" fill-opacity="0.4" />
                <text x="325" y="315"> 06 / 21</text>
                <text x="335" y="340"> 2021 </text>
            </WorkCard>
        </a>
    );
};

export default Work;