import React, { Component } from 'react';
import { Back } from './styles.js';

export default class Backdrop extends Component{

   render(){
       return(
        <Back onClick={this.props.closeDrawer}/>
       );
   }

}