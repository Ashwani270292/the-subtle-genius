import React, { Component } from 'react';
import {FullContainer, FullBottomContent, WhiteSpace, 
    AuthorDateTimeContainer, AuthorDateTimeInnerContainer,
    WhiteLine} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class FullScreenPost extends Component{

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
              <FullContainer bgImage={bgImage}>
                <FullBottomContent>
                    <Tag tagColor={tag.color}>{tag.title}</Tag>
                    <WhiteSpace/>
                    <Text paddingRight={`6em`} type={"bold"} textSize={`2.8em`} textColor={`#fff`}>{title}</Text>
                    <WhiteSpace/>
                    <AuthorDateTimeContainer>
                        <AuthorDateTimeInnerContainer>
                            <FeatherIcon icon="user" stroke="#fff" size="12"/>
                            <Text paddingLeft={1} textColor={`#fff`} textSize={`0.7em`}>{authorName}</Text>
                        </AuthorDateTimeInnerContainer>
                        <WhiteLine/>
                        <AuthorDateTimeInnerContainer>
                            <FeatherIcon icon="calendar" stroke="#fff" size="12"/>
                            <Text paddingLeft={1} textColor={`#fff`} textSize={`0.7em`}>{postedDate}</Text>
                        </AuthorDateTimeInnerContainer>
                        <WhiteLine/>
                        <AuthorDateTimeInnerContainer>
                            <FeatherIcon icon="clock" stroke="#fff" size="12"/>
                            <Text paddingLeft={1} textColor={`#fff`} textSize={`0.7em`}>{readTime}</Text>
                        </AuthorDateTimeInnerContainer>
                        
                    </AuthorDateTimeContainer>
                </FullBottomContent>
              </FullContainer>
          );
    }

}