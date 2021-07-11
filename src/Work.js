import React from 'react';
import styled from 'styled-components';

const WorkCard = styled.svg`
    
    :hover #intro{
        fill-opacity: 1;
        opacity: 1;
    }
    :hover #image{
        fill: #324158;
        fill-opacity: 0.8;
    }
    margin: 10px;
    max-width:350px;
    max-height:350px;
    font-family: Futura;
    .r{
        rx: 10;
    }
    #image{
        transition: 0.7s;
        fill: #587CB4;
        rx: 10;
    }
    div{

        font-size: 20px;
        color: white;
        text-align: left;
    }
    #intro{
        transition: 0.7s;
        fill-opacity: 0;
        opacity: 0;
    }
    image {
        rx: 10;
    }
    
`

function Work({id, title, intro, date, year, image_route, cover_color}){
    return(
        <WorkCard viewBox="-50 -50 440 400">
            <rect className="r" x="-50" y="-25" width="440" height="83" fill="#C4C4C4"/>
            <text x="180" y="30" textAnchor="middle" fontSize="28px" fontWeight="600" fill="#587CB4" >Day {id}</text>
            <rect x="5" y="-50" width="30" height="50" rx="13" fill="#587CB4" />
            <rect x="155" y="-50" width="30" height="50" rx="13" fill="#587CB4" />
            <rect x="305" y="-50" width="30" height="50" rx="13" fill="#587CB4" />
            
            <rect className="r" x="-50" y="70" width="440" height="280" fill={cover_color} />
            <image href={image_route} x="-50" y="70" width="440" height="280" />
            
            <g id="intro">                    
                <rect id="image" x="-50" y="70" width="440" height="280" />
                <text x="180" y="180" textAnchor="middle" fontSize="26px" fontWeight="500" fill="#F9D574" >{title}</text>
                <rect x="-30" y="200" width="380" height="1.5" fill="white" />
                <foreignObject x="-25" y="210" width="395" height="100">
                    <div xmlns="http://www.w3.org/1999/xhtml">
                        {intro}
                    </div>
                </foreignObject>
            </g>
            
            {/* <text x="5" y="140" textAnchor="left" fontSize="24px" fill="#F9D574" width="100px" >Lorem ipsum dolor sit amet, consect adipiscing elit. Risus ut semper diam sit. </text> */}
            

            <rect x="305" y="280" width="100" height="85" rx="60" fill="#587CB4" fillOpacity="0.4" />
            <text x="325" y="315"> {date} </text>
            <text x="335" y="340"> {year} </text>
        </WorkCard>
        
    );
};

export default Work;