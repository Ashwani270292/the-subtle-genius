import styled from 'styled-components'
import { theme } from '../../constants';

export const IconContainer = styled.div`
    width: 1.2em;
    height: 1.2em;
    border-style: solid;
    border-radius: 2px;
    border-width: 1px;
    border-color: #E9E9E9;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-left: ${props=>props.marginLeft};
`;


export const Container = styled.div `

    min-width: 32.7em;
    max-width: 32.7em;
    min-height: 23em;
    max-height: 23em;
    height: 22em;
    border-radius: 0.5em;
    display:flex;
    align-items: flex-end;
    background-image: ${props=>props.bgImage};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    margin-top: 1.7em;
`;

export const FullContainer = styled.div `
    min-width: 100%;
    max-width: 100%;
    height: 41em;
    display:flex;
    align-items: flex-end;
    background-image: ${props=>props.bgImage};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    margin-top: 1.7em;
`;

export const SmallContainer = styled.div `

    min-width: 15.5em;
    max-width: 15.5em;
    min-height: 11em;
    max-height: 11em;
    border-radius: 0.5em;
    background: ${theme.colors.green};
    display: flex;
    align-items: flex-start;
    background-image: ${props=>props.bgImage};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
`;

export const MoreCategoryPostContainer = styled.div `
    display: flex;
    flex-direction: row;
    padding-top: 1.7em;

`

export const BgImage = styled.img `
    border-radius: 0.5em;
    min-width: 32.7em;
    max-width: 32.7em;
    min-height: 23em;
    max-height: 23em;
`;

export const SmallBgImage = styled.img `
    border-radius: 0.5em;
    min-width: 15.5em;
    max-width: 15.5em;
    min-height: 11em;
    max-height: 11em;
`;

export const BottomContent = styled.div `
    padding-left: 2.5em;
    padding-right: 2.5em;
    padding-bottom:2.5em;
    width: 100%;
    border-radius: 0.5em;
    background-image: linear-gradient(0deg, #000, rgba(198, 198, 198, 0));

`;

export const FullBottomContent = styled.div `
    padding-left: 13em;
    padding-right: 13em;
    padding-bottom:5em;
    width: 100%;
    border-radius: 0.5em;
    background-image: linear-gradient(0deg, #000, rgba(198, 198, 198, 0));

`;

export const TopContent = styled.div `
    padding-left: 0.9em;
    padding-right: 0.9em;
    padding-top:0.9em;

`;

export const MorePostsContent = styled.div `
    padding-left: 0em;
    padding-right: 0em;
    padding-top:1.7em;
`;

export const WhiteSpace = styled.div`
    margin-top: ${props=>props.height ? props.height : `1em`};
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

export const AuthorDateTimeContainer = styled.div `
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;

`;

export const AuthorDateTimeInnerContainer = styled.div `
    display: flex;
    flex-direction: row;
    padding-right: 1em;
`;

export const WhiteLine = styled.div `
    height: 1em;
    width: 1px;
    background: #fff;
    margin-right: 1em;
`;
export const GrayLine = styled.div `
    height: 1em;
    width: 1px;
    background: #777777;
    margin-right: 1em;
`;

export const PostTitleContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

export const ActionContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const BlackLine = styled.div `
    height: 0.1em;
    width: 3.5em;
    background-color: #000;
`;

export const PopularPostContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 75%;
    padding-top: 1.7em;
    align-items: center;
    
`;

export const PopularPostContentContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1.5em;
`;

export const PoplarNarrativesContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: spaceBetween;
`;

export const PopularNarrativesPost = styled.div `
    border-radius: 0.5em;
    background-image: ${props=>props.bgImage};
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    margin-top: 1.7em;
    min-width: 8em;
    max-width: 8em;
    min-height: 11em;
    max-height: 11em;
    height: 11em;
    
`;