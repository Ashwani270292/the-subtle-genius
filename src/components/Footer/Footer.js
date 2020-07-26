import React, { Component } from 'react';
import { FooterContainer, FooterItemContainer, WhiteSpace, BottomContainer } from './styles.js';
import { Text, Image, Tag } from '..';
import FeatherIcon from 'feather-icons-react';

export default class Footer extends Component{

   render(){
       return(
           <div>
        <FooterContainer>

            <FooterItemContainer>
                <Text type={"bold"} textSize={`1.4em`} textColor={`#000`}>Company</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>About Us</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Writers</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Privacy Policy</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Terms Of Use</Text>
            </FooterItemContainer>

            <FooterItemContainer>
                <Text type={"bold"} textSize={`1.4em`} textColor={`#000`}>Contact Us</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Write For Us</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Queries</Text>
                <WhiteSpace/>
                <Text type={"bold"} textSize={`1.4em`} textColor={`#000`}>Follow Us</Text>
            </FooterItemContainer>

            <FooterItemContainer>
                <Text type={"bold"} textSize={`1.4em`} textColor={`#000`}>Editorial</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Narratives</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>All Posts</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Categories</Text>
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>Monthly Letter</Text>
            </FooterItemContainer>

            <FooterItemContainer>
                <Text type={"bold"} textSize={`1.4em`} textColor={`#000`}>NewsLetter</Text>
                
                <WhiteSpace/>
                <Text textSize={`0.9em`} textColor={`#000`}>New Posts straight to your inbox</Text>
            </FooterItemContainer>

        </FooterContainer>

        <BottomContainer>
            <Text textSize={`0.8em`} textColor={`#fff`} paddingLeft={16}>© 2020 The Subtle Genius</Text>
        </BottomContainer>

        </div>
       );
   }

}