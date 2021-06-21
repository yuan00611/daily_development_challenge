import React from 'react';
import styled from 'styled-components';
import Work from './Work';

const List = styled.div`
    

`

function WorkList(){
    return(
        <List>
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
        </List>
    );
};

export default WorkList;