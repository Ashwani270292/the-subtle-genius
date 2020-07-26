import React, { Component } from 'react';
import { Back, Title } from './styles.js';

export default class Loader extends Component{

   render(){
       return(
        <Back>
            <Title>
                <span style={{backgroundColor:"#000", paddingLeft:"0.3em", paddingRight:"0.3em", color:"#fff"}}>T</span> 
                <span style={{backgroundColor:"#fff", paddingLeft:"0.2em", paddingRight:"0.3em", color:"#000"}}>S G</span>
            </Title>
        </Back>
       );
   }

}