import React from 'react';
import styled from 'styled-components';
import Work from './Work';
import projectData from './json/project_detail.json';

import { Link } from 'react-router-dom';

const List = styled.div`
    
`

function WorkList(){
    return(
        <List>
            {
                projectData.data.map((d, i) => {
                    return(
                        <Link 
                            key={i}
                            to= {d.path}
                        >
                        <Work 
                            key={i}
                            id={d.id}
                            title={d.title}
                            intro={d.intro}
                            date={d.date}
                            year={d.year}
                            image_route={d.image_route}
                            cover_color = {d.cover_color}
                        />
                        </Link>
                    );
                })
            }
            
        </List>
    );
};

export default WorkList;