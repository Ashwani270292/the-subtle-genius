import React, { Component } from 'react';
import {PostTitleContainer, WhiteLine, BlackLine, ActionContainer, IconContainer} from './styles';
import { Text, Image } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';
import { Divider } from '../Header/styles';

export default class PostHeader extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {
            children,
            title
          } = this.props;

          return(
              <PostTitleContainer >
                  <ActionContainer>
                  <Text type={"bold"} textSize={`1.5em`}>{title}</Text>
                  <div style={{display: 'flex', alignItems:'center'}} onClick={this.props.onClick}>
                    <Text textSize={`.7em`} textColor={`#9A9A9A`}>VIEW ALL</Text>
                    <IconContainer marginLeft={`.5em`}>
                        <FeatherIcon icon="chevron-right" stroke="#9A9A9A" size="9"/>
                    </IconContainer>
                  </div>
                  </ActionContainer>
                  <WhiteLine/>
                  <BlackLine/>
                  <Divider/>
              </PostTitleContainer>
          );
    }

}