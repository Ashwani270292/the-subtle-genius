import React, { Component } from 'react';
import {BgContainer, GrayLine, AuthorDetailContainer, TagsContainer} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class AuthorTags extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {
            children,
            tags,
            authorDetails
          } = this.props;

          return(
              <BgContainer>
                    <AuthorDetailContainer>
                        <Image type={'circle'} src={'http://radicalnews.in/images/uploads/articlesImg/signaloud1.jpg'} size={`4.5em`}/>
                        <Text  type={'bold'} textSize={`1.2em`} paddingTop={0.5}>{authorDetails.authorName}</Text>
                        <Text  type={'caption'} textSize={`0.7em`} textColor= {'#B6B6B6'} paddingTop={1}>VIEW POSTS</Text>
                    </AuthorDetailContainer>

                    <GrayLine/>

                    <TagsContainer>
                        <Text type={'bold'} textSize={`1.2em`}>Post Tags:</Text>
                        <div style={{marginTop:'1.5em', lineHeight: '3em'}}>
                        {tags.map((tag, index)=>(
                                    <Tag background={true} backgroundColor={`#f2f2f2`}>{tag.title}</Tag>
                        ))}
                        </div>
                    </TagsContainer>
              </BgContainer>
          );
    }

}