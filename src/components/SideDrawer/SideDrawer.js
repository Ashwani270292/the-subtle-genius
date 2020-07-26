import React, { Component } from 'react';
import { Drawer, DrawerItems, DrawerItem, DrawerHeader, Title } from './styles.js';
import { mocks } from './../../constants';
import { Text } from './../index';
import FeatherIcon from 'feather-icons-react';

export default class SideDrawer extends Component{

    constructor(props){
        super(props);
        this.state= {
            drawerItems:[]
        }
    }

    componentDidMount(){
        this.setState({drawerItems: mocks.menuOptions})
    }

   render(){
       const { drawerItems} = this.state;

       let pos = `-120%`;
        if(this.props.show){
            pos = `0%`;
        }

       return(
            <Drawer position={pos}>
                <DrawerItems>
                    <DrawerHeader>
                        <Title>
                            <span style={{backgroundColor:"#000", paddingLeft:"0.3em", paddingRight:"0.3em", color:"#fff"}}>THE</span> 
                            <span style={{backgroundColor:"#fff", paddingLeft:"0.2em", paddingRight:"0.3em", color:"#000"}}>SUBTLE GENIUS</span>
                        </Title>
                        <FeatherIcon icon="x" stroke="#000" size="18"  stroke-width="3" onClick={this.props.closeDrawer}/>
                    </DrawerHeader>
                    <>
                    {drawerItems.map((dataBean, index)=>(
                        <DrawerItem>
                            {dataBean.title}
                        </DrawerItem>
                    ))}
                    </>
                </DrawerItems>
            </Drawer>
       );
   }

}