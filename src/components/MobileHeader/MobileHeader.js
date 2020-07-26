import React, { Component }  from 'react'
import { Container, SearchBar, ClearButton, Search, Icon } from './styles'
import FeatherIcon from 'feather-icons-react';
import { theme } from '../../constants'

export default class MobileHeader extends Component{
  constructor(props){
    super(props);
    this.state = {showSearch: false,
                  value: ''};
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
            <Icon  onClick={()=> {this.setState({value: '', showSearch: false})}}>
              <FeatherIcon icon="x" stroke="#a2a2a2" size="20"/>
            </Icon>
              
          );
      }
  }

  renderSearch(){
      return(
        <SearchBar>
          <Search placeholder="Search" 
          value={this.state.value} onChange={this.handleChange}
          ></Search>
          {this.renderClear()}
        </SearchBar>            
      )
  }
  render(){
    const { showSearch } = this.state;
    return (
      <Container>
        
          <header-title><span style={{paddingRight:"0.2em"}}>THE</span> <span style={{backgroundColor:"#fff", paddingLeft:"0.2em", paddingRight:"0.2em", color:"#000"}}>SUBTLE GENIUS</span></header-title>
          
          {!showSearch ? 
            <div>
              <Icon  onClick={()=> this.setState({showSearch: true})}>
                <FeatherIcon icon="search" stroke="#d2d2d2" size="20"/></Icon>
              {/* <Icon style={{paddingLeft:20}}>
                <FeatherIcon icon="bell" stroke="#d2d2d2" size="20"/>
              </Icon> */}
            </div>
            :
            this.renderSearch()
          }
        
      </Container>
    )
  }
}
