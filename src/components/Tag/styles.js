import styled from 'styled-components'
import { theme } from '../../constants';

export const StyledText = styled.label`
    font-size:${theme.sizes.tagFontSize};
    font-weight: ${theme.fontWeights.medium};
    color:${theme.colors.white};
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    padding-right: 1em;
    padding-left: 1em;
    border-radius: 2em;
    background-color:${props => props.tagColor};
    cursor: pointer;
    @media (max-width: 640px) {
        padding-top:${props => props.padding}rem;
        font-size: ${theme.mobileSizes.tagFontSize};
        text-transform: uppercase;
        font-weight: ${theme.fontWeights.medium};
        color:${theme.colors.captionColor};
    }
`;

export const BackgroundStyledText = styled.label`
    font-size:0.7em;
    font-weight: ${theme.fontWeights.regular};
    border-color:"#000";
    border-style: solid;
    border-radius: 3px;
    border-width: 1px;
    padding:0.3em 0.4em;
    margin-right: 0.8em;
    cursor: pointer;
    &:hover{
        border-color:${theme.colors.green};
        color:${theme.colors.green};
    }
    @media (max-width: 640px) {
        margin-right: 1em;
        padding-top:${props => props.padding}rem;
        font-size: 0.7em;
        text-transform: uppercase;
        font-weight: ${theme.fontWeights.medium};
    }
`;

