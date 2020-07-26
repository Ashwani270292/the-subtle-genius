import styled from 'styled-components'
import { theme } from './constants'

export const HeaderSection = styled.div`
  overflow: hidden;
  background-color: #fff;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
`;

export const MainContainer = styled.div`

`;

export const Title = styled.label`
    font-size: ${theme.webSizes.titleFontSize};
    font-weight: ${theme.fontWeights.bold};
    color:${theme.colors.primary};
    padding-top: ${theme.webSizes.titlePaddingTop};
    @media (max-width: 640px) {
        font-size: ${theme.mobileSizes.titleFontSize};
        padding-top:0px;
        justify-content:center;
    }
`;

export const LeftItemContainer = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 50%;
    min-width:50%;
    float: left;
    padding-top:${theme.webSizes.containerTopPadding};
    max-width:${props=> props.maxWidth};
    min-width:${props=> props.minWidth};
    @media (max-width: 640px) {
        padding-top:2em;
        max-width: 100%;
        min-width: 100%;
        float: none;
    }
`;

export const RightItemContainer = styled.div`

    display: flex;
    flex-direction: row;    
    justify-content: middle;
    max-width:${props=> props.maxWidth};
    min-width:${props=> props.minWidth};
    padding-top:${theme.webSizes.containerTopPadding};
    @media (max-width: 640px) {
        padding-top:2.5rem;
        max-width: 100%;
        min-width: 100%;
    }
`;

export const NewsAndTrendsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media (max-width: 640px) {
        flex-direction: column;
        padding-left:0px;
        padding-bottom: 0px;
        justify-content:none;
    }
`;

export const RightInnerContainer = styled.div`
    display: flex;
    flex-direction: column;    
    padding-left:${theme.webSizes.leftContainerLeftPadding};
    padding-bottom: ${theme.webSizes.leftContainerBottomPadding};
    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        padding-left:0px;
        padding-bottom: 0px;
    }
`;
export const Icon = styled.span`
  margin-top:4px;
  padding-left: 10px;
  
`;

export const Divider = styled.div`
    height: 1px;
    width: ${props=> props.full ? `100%` : `88%`};
    margin-top:${props=> props.full ? `4em` : `1em`};
    margin-bottom: 4em;
    background: #E9E9E9;

    @media (max-width: 640px) {
        width: ${props=> props.full ? `100%` : `70%`};
        margin-top:${props=> props.full ? `2em` : `1em`};
        margin-bottom: 1em;
        background: #E9E9E9;
    }
`;

export const MoreSectionInnerDivider = styled(Divider)`
    margin-top:1.5em;
    margin-bottom: 1.5em;
    width: 100%;
    @media (max-width: 640px) {
        width: 100%;
        margin-top:1em;
        margin-bottom: 1em;
    }
`;

export const DividerContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:2em;

    @media (max-width: 640px) {
        display: flex;
        flex-direction: row;
        padding-left:0px;
        margin-top:1em;
    }

`;

export const SubMenu = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding-top: 0.8em;
    padding-bottom: 0.5em;
    justify-content: center;
    @media (max-width: 640px) {
        display: none;
    }
`;
export const TitleContainer = styled.div`
    padding-top: ${props=>props.paddingTop};
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2em;
    @media(max-width: 640px){
        font-size: 1.5em;
        font-weight:600;
    }
`;

export const AuthorContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: ${props=>props.paddingTop};
    padding-bottom: 0.7em;
`;

export const TagsContainer = styled.div`
    display: block;
    line-height: 1em;
    flex-direction: row;
    padding-top: ${theme.webSizes.tagContainerMarginTop};
    @media(max-width: 640px){
        line-height: 2.2em;
        padding-top: ${theme.mobileSizes.tagContainerMarginTop};
    }
`

export const SocialMediaShareContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 2em;
    @media(max-width: 640px){
        justify-content: center;
        margin-top: 1.2em;
    }
`;

export const ShareButton = styled.div`
    padding-left:1em;
`;

export const MoreItemsContainer = styled.div`
    padding-left: ${theme.webSizes.containerLeftPadding};
    padding-right: ${theme.webSizes.containerRightPadding};
    background-color: ${props=>props.backgroundColor};
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    @media(max-width: 640px){
        padding-left: ${theme.mobileSizes.containerLeftPadding};
        padding-right: ${theme.mobileSizes.containerRightPadding};
        padding-top: 1em;
        padding-bottom: 1em;
    }
`;
export const MoreItemsInnerContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2em;
    @media(max-width: 640px){
        grid-template-columns: auto;
    }
`;
export const MIMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const MIContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 65%;
`;

export const MoreListContainer = styled.div`
    display: flex;
    display-direction: row;
    justify-content: space-between;
    padding-bottom:2em;
`;
export const WhiteSpace = styled.div`
    margin-top: ${props=>props.height ? props.height : `3em`};
    @media(max-width: 640px){
        margin-top: 1.5em;
    }
`;

export const ReadLine = styled.div`
    height: 0.2em;
    width: ${props=>props.length}%;
    background-color: #0DC25E;
   
`;



