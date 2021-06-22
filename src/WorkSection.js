import React from "react";
import styled from "styled-components";
import WorkList from "./WorkList";

const WorkSect = styled.div`
    background-color: #324158;
    margin-top: -25px;
    h1{
        font-family: Futura;
        color: #F9D574;
        font-size: 28px;
        
    }
`

function WorkSection(){
    return(
        <WorkSect>
            <h1>All Works</h1>
            <WorkList />
        </WorkSect>
    );
}

export default WorkSection;