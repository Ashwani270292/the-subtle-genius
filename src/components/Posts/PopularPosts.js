import React, { Component } from 'react';
import {
    SmallContainer,
    SmallBgImage,
    TopContent,
    HalfWhiteSpace,
    AuthorDateTimeContainer,
    AuthorDateTimeInnerContainer,
    GrayLine,
    PopularPostContainer,
    PopularPostContentContainer,
    WhiteSpace
} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class PopularPosts extends Component{

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
            authorName,
            metaContent,
            imageSource,
          } = this.props;

          let bgImage = 'url('+imageSource+')';

          return(
              <PopularPostContainer onClick={this.props.onClick}>
                <SmallContainer bgImage={bgImage}>
                    <TopContent>
                        <Tag tagColor={tag.color}>{tag.title}</Tag>
                    </TopContent>
                </SmallContainer>
                <PopularPostContentContainer>
                    <Text type={"bold"} textSize={`1.3em`} textColor={`#000`}>{title}</Text>
                    <WhiteSpace/>
                    <Text type={"light"} textSize={`1em`} textColor={`#777777`}>{metaContent}</Text>
                    <WhiteSpace/>
                    <AuthorDateTimeContainer>
                        <AuthorDateTimeInnerContainer>
                            <FeatherIcon icon="user" stroke="#777777" size="12"/>
                            <Text paddingLeft={1} textColor={`#777777`} textSize={`0.7em`}>{authorName}</Text>
                        </AuthorDateTimeInnerContainer>
                        <GrayLine/>
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
                </PopularPostContentContainer>
              </PopularPostContainer>
          );
    }

}