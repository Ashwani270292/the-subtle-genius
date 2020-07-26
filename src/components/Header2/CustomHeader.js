import React, { Component } from 'react';
import './style.scss';
import { HeaderContainer, Header} from './styles';
import FeatherIcon from 'feather-icons-react';

export default class CustomHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

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

    renderClear(){
        const { value } = this.state;
        if(value.length > 0){
            return(
                <label className="clear-button" onClick={()=> {this.setState({value: ''})}}>Clear</label>
            );
        }
    }

    render(){
        return (
            <HeaderContainer>
                <Header>
                    <header>
                    <header-title><span style={{paddingRight:"0.2em"}}>THE</span> <span style={{backgroundColor:"#fff", paddingLeft:"0.2em", paddingRight:"0.2em", color:"#000"}}>SUBTLE GENIUS</span></header-title>
                    <search-bar>
                        <div className="search-icon" >
                            <FeatherIcon icon="search" stroke="#a2a2a2" size="18"/>
                        </div>
                        <input type="text" className="search" placeholder="Search"  
                        value={this.state.value} onChange={this.handleChange}></input>
                        {this.renderClear()}
                    </search-bar>
                    <header-menu>
                        <span className="menu-item">Events</span>
                        <span className="menu-item">Articles</span>
                        <span className="menu-item">Help</span>
                        <span className="menu-item">Notifications</span>
                        <span className="menu-item">Profile</span>
                    </header-menu>
                    </header>
                </Header>
            </HeaderContainer>
        );
    }
}
