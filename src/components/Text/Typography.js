import React, { Component } from "react";
import {NormalText, BoldText, CaptionText,TitleText, 
  AuthorNameText, BottomAuthorBio, BottomAuthorName, LightText} from './styles';
import { theme } from '../../constants';

export default class Typography extends Component {
  render() {
    const {
      children,
      type,
      paddingTop,
      position,
    } = this.props;

    let lines = this.props.lines !== undefined 
    ? this.props.lines
    : 2;

    let textStyle = this.props.textStyle !== undefined
    ? this.props.textStyle
    : `normal`;

    let textColor = this.props.textColor !== undefined
    ? this.props.textColor
    : theme.colors.primary;

    let paddingRight = this.props.paddingRight !== undefined
    ? this.props.paddingRight
    : `0em`;

    let paddingLeft= this.props.paddingLeft !== undefined
    ? this.props.paddingLeft
    : `0em`;

    let cursorStyle = this.props.cursorStyle !== undefined
    ? this.props.cursorStyle
    : `default`;
   
    let textSize = this.props.textSize !== undefined
                  ? this.props.textSize
                  : theme.webSizes.normalTextSize;

    switch(type){
      case "bottomAuthorName":
                  return( 
                    <BottomAuthorName paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor} textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                      {children}
                    </BottomAuthorName>);
      case "authorBio":
                    return( 
                      <BottomAuthorBio paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor} textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                        {children}
                      </BottomAuthorBio>);
      
      case "authorName":
                    return( 
                      <AuthorNameText paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor} textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                        {children}
                      </AuthorNameText>);
      case "title":
                  return( 
                    <TitleText paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor} textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                      {children}
                    </TitleText>);
      case "normal":
                  
                   return( 
                    <NormalText paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor} textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                      {children}
                    </NormalText>);
      case "light":
                  return( 
                    <LightText paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor} textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                      {children}
                    </LightText>);
      case "bold": 
                  let textSize2 = this.props.textSize !== undefined
                  ? this.props.textSize
                  : theme.webSizes.boldTextSize;
                  return( 
                  <BoldText cursor={cursorStyle} paddingLeft= {paddingLeft}  paddingRight={paddingRight} textColor={textColor}  textSize = {textSize2} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                    {children}
                  </BoldText>);
                
      case "caption": 
                  let textSize3 = this.props.textSize !== undefined
                  ? this.props.textSize
                  : theme.webSizes.captionTextSize;
                  return( 
                  <CaptionText paddingLeft= {paddingLeft}  textColor={textColor}  textSize = {textSize3} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                    {children}
                  </CaptionText>);
                    
      default: 
                return( 
                  <NormalText cursor={cursorStyle} paddingLeft= {paddingLeft} paddingRight={paddingRight} textColor={textColor}  textSize = {textSize} textStyle={textStyle} noOfLines = {lines} paddingTop={paddingTop} position={position}>
                    {children}
                  </NormalText>);
    }
    
    
  }
}
