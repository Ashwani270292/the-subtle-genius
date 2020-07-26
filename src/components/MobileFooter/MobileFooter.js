import React, { Component }  from 'react'
import { Container, Icon } from './styles'
import FeatherIcon from 'feather-icons-react';

export default class MobileFooter extends Component{
  render(){
    return (
      <Container>
        <Icon>
          <FeatherIcon icon="file-text" stroke="#929292" size="24"/>
        </Icon>
        <Icon>
          <FeatherIcon icon="calendar" stroke="#929292" size="24"/>
        </Icon>
        <Icon>
          <FeatherIcon icon="user" stroke="#929292" size="24"/>
        </Icon>
      </Container>
    )
  }
}
