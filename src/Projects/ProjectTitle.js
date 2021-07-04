import React from 'react';
import styled from 'styled-components';



const Title = styled.h1`
    font-family: Futura;
    font-size: 1.7em;
    font-weight: 600;
    margin-top: 70px;
    color: #324158;
    
`

function ProjectTitle ({ title, id }) {
    return(
        
        <Title>  Day {id} <span> {title} </span> </Title>
    );
}

export default ProjectTitle;