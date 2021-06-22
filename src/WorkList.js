import React from 'react';
import styled from 'styled-components';
import Work from './Work';
import projectData from './json/project_detail.json';

const List = styled.div`
    
`

function WorkList(){
    return(
        <List>
            {
                projectData.data.map((d, i) => {
                    return(
                        <Work 
                            key={i}
                            id={d.id}
                            title={d.title}
                            intro={d.intro}
                            date={d.date}
                            year={d.year}
                            image_route={d.image_route}
                            link={d.link}
                        />
                    );
                })
            }
            
        </List>
    );
};

export default WorkList;