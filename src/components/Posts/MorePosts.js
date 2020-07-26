import React, { Component } from 'react';
import {MorePostsContent, WhiteSpace,HalfWhiteSpace,
    AuthorDateTimeContainer, AuthorDateTimeInnerContainer, GrayLine} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class MorePosts extends Component{

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
              <div style={{minWidth:'15.5em', maxWidth:'15.5em'}} onClick={this.props.onClick}>
                
                <MorePostsContent>
                    <Tag tagColor={tag.color}>{tag.title}</Tag>
                </MorePostsContent>
                <WhiteSpace/>
                    <Text type={"bold"} textSize={`1em`} textColor={`#000`}>{title}</Text>
               
                <WhiteSpace/>
                
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
          );
    }

}