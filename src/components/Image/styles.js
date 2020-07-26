import styled from 'styled-components'
import { theme } from '../../constants';

export const HalfImage = styled.img`
   height: ${theme.webSizes.halfImageHeight};
    width: 25%;
    @media (max-width: 640px) {
       height: auto;
       width: 50%;
    }
`;
export const FullImage = styled.img`
    height: ${theme.webSizes.fullImageHeight};
    width: 100%;
    @media (max-width: 640px) {
       height: auto;
       width: 100%;
    }

`;
export const QtrImage = styled.img`
    height: ${theme.webSizes.qtrImageHeight};
    width: ${theme.webSizes.qtrImageWidth};
    background-position: center center;
    background-repeat: no-repeat;
    margin-left:${theme.webSizes.imageLeftPadding};
    @media (max-width: 640px) {
       height: ${theme.mobileSizes.qtrImageHeight};
       width:  ${theme.mobileSizes.qtrImageHeight};
     
    }

`;

export const MoreImage =styled.img`
   height: auto;
   width: 30%;
   background-position: center center;
   background-repeat: no-repeat;
  
`;

export const SquareImage = styled.img`
   height: ${theme.webSizes.squareImgSize};
    width: 100%;
    background-position: center center;
    @media (max-width: 640px) {
       height: ${theme.mobileSizes.squareImgSize};
     
    }
`;

export const SmallSquareImage = styled(SquareImage)`
   height: auto;
   max-width: 30%;
   @media (max-width: 640px) {
      height: auto;
   }
`;

export const FixedSizeImage = styled.img `
   height: ${props=>props.size};
   width: ${props=>props.size};
   background-color: #000;
   background-position: center center;
   background-repeat: no-repeat; /* Do not repeat the image */
   background-size: cover; /* Resize the background image to cover the entire container */
   border-radius: 6px;
`;

export const BannerImage = styled.img`
margin-top: 2em;
   height: auto;
   width: 100%;
   @media(max-width: 640px){
      height: auto;
      margin-top: 1em;
   }
`;

export const CircleImage= styled.img`
   height: ${props=>props.size};
   width: ${props=>props.size};
   border-radius: 50%;
   @media(max-width: 640px){
      height: 1.5em;
      width: 1.5em;
   }
`;

export const BigCircleImage = styled.img`
   height: 5em;
   width: 5em;
   border-radius: 50%;
   @media(max-width: 640px){
      height: 3em;
      width: 3em;
   }
`;

