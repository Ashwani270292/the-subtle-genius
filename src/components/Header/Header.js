import React, { Component } from 'react';
import { HeaderContainer, LeftItems, LeftIcon, Divider, 
    MenuOptions, RightItems, IconContainer, IconButtonContainer } from './styles';
import { Text, Image } from '../../components';
import FeatherIcon from 'feather-icons-react';
import { mocks } from '../../constants';

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {value: '', isBack: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        let isBackAllowed = this.props.isBack !== undefined ? true : false;
        console.log("isBackAllowed:", this.props.isBack);

        let menuOptions = mocks.menuOptions;
        return(
            <>
            <HeaderContainer >
                <LeftItems>
                    <LeftIcon onClick={this.props.drawerClickHandler}>
                    {isBackAllowed ? <FeatherIcon icon="arrow-left" stroke="#000" size="18"  stroke-width="3"/>
                         :<FeatherIcon icon="menu" stroke="#000" size="18"  stroke-width="3"/>
                    }
                    </LeftIcon>
                    <Image type={"circle"} size={`2.5em`}
                        src={'http://radicalnews.in/images/uploads/articlesImg/signaloud1.jpg'}
                    />
                    <Text type={"bold"} textSize={`1.2em`} paddingTop={`0.4`} paddingLeft={`0.5em`}>TSG</Text>

                    <MenuOptions>
                        {menuOptions.map((menuOption, index)=>(
                                <div style={{paddingLeft:`1em`, paddingRight:`1em`}}>
                                    <Text cursorStyle={`pointer`} textSize={`1em`}> {menuOption.title}</Text>
                                </div>
                            ))}
                    </MenuOptions>

                </LeftItems>

                <RightItems>
                    <Text cursorStyle={`pointer`} textSize={`0.8em`} textColor={`#9A9A9A`}> Login </Text>
                    <IconContainer marginLeft={`2.3em`}>
                        <FeatherIcon icon="search" stroke="#000" size="12"/>
                    </IconContainer>
                    <IconButtonContainer marginLeft={`0.7em`}>
                        <FeatherIcon icon="mail" stroke="#fff" size="14"/>
                        <Text type={"bold"} textSize={`0.8em`} textColor={`#fff`} paddingLeft={`0.5em`}>Subscribe</Text>
                    </IconButtonContainer>
                </RightItems>

            </HeaderContainer>
            <Divider/>
            </>
        );
    }

}
