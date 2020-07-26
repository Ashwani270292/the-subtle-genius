import styled from 'styled-components';
import { theme } from '../../constants';

export const Drawer = styled.div`
    background-color: ${theme.colors.white};
    height: 100%;
    box-shadow:1px 0px 7px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    z-index: 200;
    overflowY: 'scroll';
    transform: translateX(${props=> props.position});
    transition: transform 0.3s ease-out;
`;

export const Title = styled.div`
    font-size: 2em;
    font-weight: 600;
    @media (max-width: 640px) {
        font-size: 1.2em;
    font-weight: 600;
    }

`;

export const DrawerItems = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1.5em;
    @media (max-width: 640px) {
        padding-left: 0.8em;
    }
`;

export const DrawerItem = styled.div`
    font-size: ${theme.webSizes.normalTextSize};
   
    padding-top: 0.5em;
    padding-bottom:0.5em;
    @media (max-width: 640px) {
        font-size: ${theme.mobileSizes.normalTextSize};
        
        padding-top: 0.4em;
        padding-bottom:0.4em;
    }
`;

export const DrawerHeader = styled.div`
    padding-top:1em;
    padding-bottom:1em;
    padding-right: 1em;
    display: flex;
    flex-direction: row;
    justify-content:space-between;

`;