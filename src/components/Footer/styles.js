import styled from 'styled-components';
import { theme } from '../../constants';

export const FooterContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${theme.webSizes.containerLeftPadding};
    padding-right:  ${theme.webSizes.containerRightPadding};
    padding-top: 1.7em;
`;

export const FooterItemContainer = styled.div `

    display: flex;
    flex-direction: column;
    
`;

export const WhiteSpace = styled.div`
    margin-top: 1em;
    @media(max-width: 640px){
        margin-top: 1em;
    }
`;

export const HalfWhiteSpace = styled.div`
    margin-top: 0.6em;
    @media(max-width: 640px){
        margin-top: 0.6em;
    }
`;

export const BottomContainer = styled.div `
    margin-top: 5.1em;
    background-color: ${theme.colors.primary};
    height: 5em;
    display: flex;
    align-items: center;
`;

