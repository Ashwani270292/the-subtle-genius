import styled from 'styled-components';
import { theme } from '../../constants';

export const HeaderContainer = styled.div`
    background-color: ${theme.colors.white};
    height: ${theme.webSizes.headerHeight};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${theme.webSizes.containerLeftPadding};
    padding-right:  ${theme.webSizes.containerRightPadding};
    @media (max-width: 640px) {
        min-height: ${theme.mobileSizes.headerHeight};
        padding-left: ${theme.mobileSizes.containerLeftPadding};
        padding-right:  ${theme.mobileSizes.containerRightPadding};
   
    }

`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: #E9E9E9;
`;


export const Title = styled.div`
    font-size: 2em;
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 640px) {
        font-size: 1.2em;
    font-weight: 600;
    }

`;
export const LeftItems = styled.div`
    
    display: flex;
    @media (max-width: 640px) {
        padding-top: 1.2em;
    }

`;

export const MenuOptions = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3em;
    align-items: center;
`;

export const RightItems = styled.div`
  
    display: flex;
    align-items: center;
    flex-direction: row;
    @media (max-width: 640px) {
        padding-top: 1.2em;
    }
`;

export const CenterItem = styled.div`
   align-self: center;
  
`;

export const LeftIcon = styled.div`
    padding-right: 1em;
    display:none;
    @media(max-width: 640px){
        display: block;
    }
`;

export const SearchHolder = styled.div`
     display:block;
    @media(max-width: 640px){
        display: none;
    }
`;
export const RightIcon = styled.div`
    padding-left: 1em;
`;
export const CenterIcon = styled.div`
    padding-left:1em;
    padding-right: 1em;
`;

export const IconContainer = styled.div`
    width: 2.1em;
    height: 2.1em;
    border-style: solid;
    border-radius: 3px;
    border-width: 1px;
    border-color: #E9E9E9;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-left: ${props=>props.marginLeft};
`;

export const IconButtonContainer = styled.div`
    border-style: solid;
    height: 2.1em;
    border-radius: 5px;
    border-width: 1px;
    border-color: #0DC25E;
    background: #0DC25E;
    padding-left: 1.2em;
    padding-right: 1.2em;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: ${props=>props.marginLeft};
`;