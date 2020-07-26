import React, { Component } from 'react';
import {SmallContainer, SmallBgImage, TopContent, HalfWhiteSpace,
    AuthorDateTimeContainer, AuthorDateTimeInnerContainer, GrayLine} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class SmallPosts extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {
            children,
            type,
            title,
            tag,
            postedDate,
            readTime,
            imageSource,
          } = this.props;

          let bgImage = 'url('+imageSource+')';

          return(
              <div style={{minWidth:'15.5em', maxWidth:'15.5em'}} onClick={this.props.onClick}>
                <SmallContainer bgImage={bgImage}>
                    <TopContent>
                        <Tag tagColor={tag.color}>{tag.title}</Tag>
                    </TopContent>
                </SmallContainer>
                <HalfWhiteSpace/>
                    <Text type={"bold"} textSize={`1.2em`} textColor={`#000`}>{title}</Text>
                <HalfWhiteSpace/>
                <AuthorDateTimeContainer>
                        <AuthorDateTimeInnerContainer>
                            <FeatherIcon icon="calendar" stroke="#777777" size="12"/>
                            <Text paddingLeft={1} textColor={`#777777`} textSize={`0.7em`}>{postedDate}</Text>
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