import styled from 'styled-components'
import { theme } from '../../constants';

export const BgContainer = styled.div `
    display: flex;
    border-color: #B6B6B6;
    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    padding: 3em 2em;
    margin-top: 3em;
    flex-direction: row;
`;

export const GrayLine = styled.div `
    height: 9em;
    width: 1px;
    background: #B6B6B6;
    margin-right: 1em;
`;

export const AuthorDetailContainer = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2em;
    padding-right: 4em;
    min-width: 8em;
    max-width: 8em;
`;

export const TagsContainer = styled.div `
`;
