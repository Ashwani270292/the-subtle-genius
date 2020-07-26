import styled from 'styled-components'
import { theme } from '../../constants';

export const NormalText = styled.label`
    font-size:${props=> props.position === "leftPane" ? theme.webSizes.leftPaneNormalTextSize: 
    props=>props.textSize};
    font-style: ${props=>props.textStyle};
    font-weight: ${theme.fontWeights.regular};
    color:${props=>props.textColor};
    padding-top:${props => props.paddingTop}em;
    padding-left:${props=> props.paddingLeft}em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props=>props.noOfLines};
    -webkit-box-orient: vertical;
    cursor : ${props=>props.cursor};
    @media (max-width: 640px) {
        padding-top:${props => props.paddingTop}em;
        font-size: ${theme.mobileSizes.normalFontSize};
        padding-right: ${props => props.paddingRight};
        font-style: ${props=>props.textStyle};
        font-weight: ${theme.fontWeights.regular};
        line-height:1.1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${props=>props.noOfLines};
        -webkit-box-orient: vertical;
    }
`;

export const LightText = styled(NormalText) `
    font-weight: ${theme.fontWeights.light};
`;
export const TitleText = styled(NormalText)`
    font-weight: ${theme.fontWeights.medium};
    @media (max-width: 640px) {
        padding-top:0em;
        font-weight: ${theme.fontWeights.medium};
    }
`;

export const BottomAuthorName = styled(NormalText)`
    font-weight: ${theme.fontWeights.medium};
    @media (max-width: 640px) {
        padding-top:0.3em;
        font-weight: ${theme.fontWeights.medium};
    }
`;

export const AuthorNameText = styled(NormalText)`
    @media (max-width: 640px) {
        font-size: 0.5em;
    }
`;

export const BottomAuthorBio = styled(NormalText)`
    padding-left: 1.5em;
    font-size:1em;
    @media (max-width: 640px) {
        font-size: 0.8em;
        padding-left: 1.2em;
        -webkit-line-clamp: 4;
    }
`;

export const CaptionText = styled.div`
    font-size:${props=> props.position === "leftPane" ? theme.webSizes.leftPaneCaptionTextSize: 
    props=>props.textSize};
    font-style: ${props=>props.textStyle};
    font-weight: ${theme.fontWeights.light};
    color:${theme.colors.gray2};
    padding-top:${props => props.paddingTop}em;
    &:hover{
        cursor: pointer;
        color:${theme.colors.green};
        font-weight: ${theme.fontWeights.medium};
    }
    @media (max-width: 640px) {
        padding-top:${theme.mobileSizes.captionTextPadding};
        font-size: ${theme.mobileSizes.captionFontSize};
        font-style: ${props=>props.textStyle};
        font-weight: ${theme.fontWeights.regular};
        color:${theme.colors.gray2};
        
    
`;

export const BoldText = styled.div`
    font-size:${props=> props.position === "leftPane" ? theme.webSizes.leftPaneBoldTextSize: 
    props=>props.textSize};
    font-style: ${props=>props.textStyle};
    font-weight: ${theme.fontWeights.medium};
    color:${props=>props.textColor};
    padding-top:${props => props.paddingTop}em;
    padding-left:${props=> props.paddingLeft};
    padding-right:${props=> props.paddingRight};
    min-width: .6em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props=>props.noOfLines};
    -webkit-box-orient: vertical;
    cursor : ${props=>props.cursor};
    @media (max-width: 640px) {
        padding-top:${props => props.paddingTop}em;
        padding-right: ${props => props.paddingRight};
        font-size: ${theme.mobileSizes.boldTextSize};
        font-style: ${props=>props.textStyle};
        font-weight: ${theme.fontWeights.medium};
        line-height:1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${props=>props.noOfLines};
        -webkit-box-orient: vertical;
       
    }
`;