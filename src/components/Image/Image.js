import React from 'react';
import { HalfImage, FullImage, QtrImage, BannerImage,CircleImage, 
  SquareImage, BigCircleImage, SmallSquareImage,MoreImage, FixedSizeImage } from './styles';

const Image = ({ type, src, size }) => {

  let circleSize = size !== undefined
  ? size
  : `1.7em`;

  let imageSize = size !== undefined
  ? size
  : `4em`;


    switch(type){
      case "100":return ( <FullImage src= {src}/> );
      case "50":return ( <HalfImage src= {src}/> );
      case "25":return ( <QtrImage src= {src}/> );
      case "banner": return ( <BannerImage src={src} />);
      case "circle": return (<CircleImage size={circleSize} src={src}/>);
      case "bigCircle": return(<BigCircleImage src={src}/>)
      case "square": return(<SquareImage src={src} />);
      case "smallSquare": return(<SmallSquareImage src={src} />);
      case "more" : return(<MoreImage src={src}/>);
      case "fixed": return(<FixedSizeImage src={src} size={imageSize}/>);
      default:return ( <FullImage src= {src}/> );
    }

  };
  
  export default Image;
