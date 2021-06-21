import React from  'react';
import styled from 'styled-components';
import { ReactComponent as HeroSvg } from './logo.svg';

const HeroWrapper = styled.div`
    svg{
        font-family: Futura;
        background-color: ${props => props.theme.background};
        & .c {
            fill: ${props => props.theme.secondary};
        }
        & #header {
            fill: ${props => props.theme.primary};
            font-weight: 600;
        }
        & #subheader {
            fill: ${props => props.theme.secondary};
        }
        & #highlight {
            fill: ${props => props.theme.accent};
        }
    }
`

HeroWrapper.defaultProps = {
    theme: {
      background: "#324158",
      primary: "#F9D574",
      secondary: "#FFA77A",
      accent: "#587CB4"
    }
  }

function Hero() {
    return (
        <HeroWrapper>
            <HeroSvg />
        </HeroWrapper>
    );
}

export default Hero;