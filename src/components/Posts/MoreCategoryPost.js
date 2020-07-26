import React, { Component } from 'react';
import {WhiteSpace, AuthorDateTimeContainer, AuthorDateTimeInnerContainer, 
    MoreCategoryPostContainer,GrayLine,
    HalfWhiteSpace} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class MoreCategoryPost extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {
            children,
            type,
            title,
            tag,
            authorName,
            postedDate,
            readTime,
            imageSource,
          } = this.props;

          let bgImage = 'url('+imageSource+')';

          return(
              <div onClick={this.props.onClick}>
                
                <MoreCategoryPostContainer>
                    <Image type={'fixed'} size={`6.2em`} src={imageSource}/>
                    <div style={{marginLeft: '1em'}}>
                        <Text type={"bold"} textSize={`1.3em`} textColor={`#000`}>{title}</Text>
                        <WhiteSpace height={`2em`}/>
                        <AuthorDateTimeContainer>
                            <AuthorDateTimeInnerContainer>
                                <FeatherIcon icon="user" stroke="#777777" size="12"/>
                                <Text paddingLeft={1} textColor={`#777777`} textSize={`0.7em`}>{authorName}</Text>
                            </AuthorDateTimeInnerContainer>
                            <GrayLine/>
                            <AuthorDateTimeInnerContainer>
                                <FeatherIcon icon="clock" stroke="#777777" size="12"/>
                                <Text paddingLeft={1} textColor={`#777777`} textSize={`0.7em`}>{readTime}</Text>
                            </AuthorDateTimeInnerContainer>
                            
                        </AuthorDateTimeContainer>
                    </div>
                </MoreCategoryPostContainer>
              </div>
          );
    }

}