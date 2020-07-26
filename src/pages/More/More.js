import React,  { Component } from 'react';
import {Header, Container, Text, SideDrawer, Backdrop, Image, Tag} from '../../components';
import { HeaderSection,SubMenu, MoreItemsContainer, TitleContainer, 
    MIContainer, MoreListContainer, WhiteSpace} from '../../allStyles';
import FeatherIcon from 'feather-icons-react';
import { mocks, theme } from '../../constants';
import { Redirect } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

// import MobileFooter from '../components/MobileFooter';

class More extends Component{
    constructor(props){
        super(props);
        this.state = {
            moreBlogs:[],
            loading: true,
            menuOptions:[],
            sideDrawerOpen: false,
            selectedId:'',
            goBack: false,
        }
    }
    componentDidMount(){
        this.setState({moreBlogs: mocks.justAdded, loading: false, menuOptions: mocks.menuOptions, selectedId: this.props.match.params.id});
    }

    drawerToggleClickHandler=()=>{
        console.log('Clicked Drawer Button')
        if(this.state.sideDrawerOpen)
        this.setState({sideDrawerOpen: false});
            else
        this.setState({sideDrawerOpen: true});
    }

    drawerClose=()=>{
        console.log('Drawer Closed Clicked');
        this.setState({sideDrawerOpen: false});
    }

    onBackPress(){
        this.setState({goBack: true})
    }
    renderRedirect(){
        if(this.state.goBack){
        return(
            <Redirect to={`/`}
            />
        );
        }
    }
    render(){
        const {menuOptions, loading, sideDrawerOpen, selectedId, moreBlogs } = this.state;
        let backDrop;
        if(sideDrawerOpen){
            console.log('Side Drawer true');
            backDrop = <Backdrop closeDrawer={this.drawerClose}/>;
        }
        let sectionName;
        switch(selectedId){
            case 'latest': sectionName="Latest";
            break;
            case 'popular': sectionName="Popular";
            break;
            case 'trends': sectionName="News and Trends";
            break;
            default: sectionName="Random";
            break;
        }

        return(
            <div style={{height: "100%"}}>
                <HeaderSection>
                    <Header drawerClickHandler={this.drawerToggleClickHandler} homeClick={this.onBackPress.bind(this)}/>
                    <SubMenu>
                            {menuOptions.map((menuOption, index)=>(
                                <div style={{paddingLeft:`2em`, paddingRight:`2em`}}>
                                    <Text cursorStyle={`pointer`} textSize={`0.9em`}> {menuOption.title}</Text>
                                </div>
                            ))}
                    </SubMenu>
                </HeaderSection>
                <SideDrawer show={sideDrawerOpen} closeDrawer={this.drawerClose}/>
                {backDrop}
                <div style={{ overflowY: 'scroll'}}>
                    <Container type={"articleBelowHeader"}>
                        <TitleContainer paddingTop={`0.8em`}>
                            <Text type={"title"}>More from {sectionName}</Text>
                        </TitleContainer>
                        <WhiteSpace/>
                        {moreBlogs.map((dataBean, index)=>(
                            <MoreListContainer>
                                <Image type={"more"} src = {dataBean.imageUrl}/>
                                <MIContainer>
                                    <Tag padding={0}>{dataBean.category}</Tag>
                                    <Text type={"bottomAuthorName"} textSize={`1.5em`} paddingTop={0.2}>{dataBean.heading}</Text>
                                    <Text textSize={`1em`} paddingTop={0.5}>{dataBean.shortContent}</Text>
                                </MIContainer>
                            </MoreListContainer>
                        ))}
                    </Container>
                </div>
                <Container>
                    <MoreItemsContainer backgroundColor={`#000`}>
                        <Text type ={"caption"} textSize={`0.8em`} textColor={`#fff`}> © 2020 The Subtle Genius </Text>
                    </MoreItemsContainer>
                </Container>
                {this.renderRedirect()}
            </div>
        );
    }
}
export default withLastLocation(More);