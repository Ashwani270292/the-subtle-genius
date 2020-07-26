import React, { Component } from 'react';
import {PoplarNarrativesContainer, PopularNarrativesPost} from './styles';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class PopularNarratives extends Component{

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
              
                    <PopularNarrativesPost bgImage = {bgImage} onClick={this.props.onClick}>

                    </PopularNarrativesPost>
              
          );
    }

}