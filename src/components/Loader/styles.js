import styled from 'styled-components';
import { theme } from '../../constants';

export const Back = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 50;
    top:0;
    left:0;
    justify-content: center;
    display: flex;
    align-items: center;
`;
export const Title = styled.div`
    font-size: 2em;
    font-weight: 600;
    @media (max-width: 640px) {
        font-size: 1.2em;
    font-weight: 600;
    }

`;