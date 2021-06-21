import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
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
            Debbie
        </Nav>
    )
}

export default Navigation;