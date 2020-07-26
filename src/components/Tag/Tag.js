import React, { Component } from "react";
import { StyledText, BackgroundStyledText } from './styles';

export default class Typography extends Component {



  render() {
    const {
      children,
      padding
    } = this.props;
    let background = this.props.background !== undefined 
    ? this.props.background
    : false;

    let backgroundColor = this.props.backgroundColor !== undefined
    ? this.props.backgroundColor
    : `#fff`;
    
    let tagColor = this.props.tagColor !== undefined
    ? this.props.tagColor
    : `#fff`;
    if(background){
      return(<BackgroundStyledText backgroundColor={backgroundColor} padding={padding}> {children} </BackgroundStyledText>)
    }else{
    return(<StyledText padding={padding} tagColor={tagColor}> {children} </StyledText>)
    }
    
  }
}
