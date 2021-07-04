import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
    a {
        color: ${props => props.theme.primary};
        text-decoration: none;
        :hover {
            color: #FFE59F;
        }
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40px;
    background-color: ${props => props.theme.background};
    
    font-family: Futura;
    font-size: 1.4em;
    font-weight: 500;
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
`

Nav.defaultProps = {
    theme: {
      background: "#324158",
      primary: "#F9D574",
      secondary: "#FFA77A",
      accent: "#587CB4"
    }
  }

function Navigation(){
    return(
        <Nav>
            <Link to="/daily_development_challenge"> Debbie </Link>
        </Nav>
    )
}

export default Navigation;