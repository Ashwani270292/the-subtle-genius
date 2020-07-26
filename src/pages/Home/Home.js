import React,  { Component } from 'react';
import {Header, Container, Text, Image, Tag, SideDrawer, Backdrop, 
    HalfScreenPost, SmallPosts, PostHeader, PopularPosts, 
    PopularNarratives, MorePosts, Footer} from '../../components';

import {HeaderSection,  WhiteSpace, Divider} from '../../allStyles';
import FeatherIcon from 'feather-icons-react';
import { mocks, theme } from '../../constants';
import { Redirect } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

// import MobileFooter from '../components/MobileFooter';

class Home extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            justAdded:[],
            loading: true,
            popularNarratives:[],
            morePosts:[],
            menuOptions:[],
            sideDrawerOpen: false,
            selectedId:0,
            sectionId: 'null',
            selectedName: ''
        }
    }

    componentDidMount(){
        this.setState({morePosts: mocks.morePosts, justAdded: mocks.justAdded, popularNarratives: mocks.popularNarratives, loading: false, 
            newsTrends : mocks.newsTrends, menuOptions: mocks.menuOptions});
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

    handleArticleClick(dataBean){
        this.setState({selectedId: dataBean.id});
    }

    renderRedirect(){
        const { selectedId } = this.state;
        if(selectedId !== 0){
            switch(selectedId){
                case 'MORE':
                    this.props.history.push('/More')
                    return(
                        <Redirect to={`/more/${selectedId}`}
                        />
                    );
                   
                default :this.props.history.push('/Article')
                    return(
                        <Redirect to={`/article/${selectedId}`}
                        />
                    );

            }
            
        }
    }


    render(){
        const {loading , justAdded, popularNarratives, morePosts, sideDrawerOpen,menuOptions} = this.state;
        let backDrop;

        if(sideDrawerOpen){
            console.log('Side Drawer true');
            backDrop = <Backdrop closeDrawer={this.drawerClose}/>;
        }
        return(
            <div style={{height: "100%"}}>
            <HeaderSection>
                <Header drawerClickHandler={this.drawerToggleClickHandler}/>
            </HeaderSection>
            <SideDrawer show={sideDrawerOpen} closeDrawer={this.drawerClose}/>
            {backDrop}
            {!loading ?
                <div>
                <Container type={"belowHeader"}>
                   
                        <PostHeader title={'Recent Posts'}/>
                        
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {justAdded.map((dataBean, index)=>( 
                                <>
                                {index === 0 || index === 1?
                                    
                                        <HalfScreenPost 
                                            imageSource={dataBean.imageUrl} 
                                            tag={menuOptions[index]}
                                            authorName={dataBean.authorName}
                                            title={dataBean.heading}
                                            postedDate={dataBean.postedDate}
                                            readTime={dataBean.readTime}
                                            onClick = {() => this.setState({selectedId: dataBean.id, selectedName: dataBean.heading})}
                                        />
                                
                                    :
                                null
                                
                                }
                                </>
                            ))}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2em'}}>
                            {justAdded.map((dataBean, index)=>( 
                                <>
                                {index === 0 || index === 1?
                                    
                                    null
                                
                                    :
                                <SmallPosts 
                                        imageSource={dataBean.imageUrl} 
                                        tag={menuOptions[index]}
                                        title={dataBean.heading}
                                        postedDate={dataBean.postedDate}
                                        readTime={dataBean.readTime}
                                        onClick = {() => this.setState({selectedId: dataBean.id, selectedName: dataBean.heading})}
                                />
                                
                                }
                                </>
                            ))}
                        </div>
                        <WhiteSpace/>
                        <PostHeader title={'Popular Posts'}/>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            {justAdded.map((dataBean, index)=>( 
                                <>
                                {
                                    
                                        <PopularPosts 
                                            imageSource={dataBean.imageUrl} 
                                            tag={menuOptions[index]}
                                            authorName={dataBean.authorName}
                                            authorImage={dataBean.authorImage}
                                            title={dataBean.heading}
                                            metaContent={dataBean.shortContent}
                                            postedDate={dataBean.postedDate}
                                            readTime={dataBean.readTime}
                                            onClick = {() => this.setState({selectedId: dataBean.id, selectedName: dataBean.heading})}
                                        />
                                    
                                }
                                </>
                            ))}
                        </div>

                        <WhiteSpace/>
                        <PostHeader title={'Popular Narratives'}/>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {popularNarratives.map((dataBean, index)=>( 
                                <>
                                {
                                        <PopularNarratives 
                                            imageSource={dataBean.imageUrl} 
                                            tag={menuOptions[index]}
                                            authorName={dataBean.authorName}
                                            authorImage={dataBean.authorImage}
                                            title={dataBean.heading}
                                            metaContent={dataBean.shortContent}
                                            postedDate={dataBean.postedDate}
                                            readTime={dataBean.readTime}
                                            onClick = {() => this.setState({selectedId: dataBean.id, selectedName: dataBean.heading})}
                                        />
                                    
                                }
                                </>
                            ))}
                        </div>

                        <WhiteSpace/>
                        <PostHeader title={'You Might Also Like'} onClick = {() => this.setState({selectedId: 'MORE'})}/>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {morePosts.map((dataBean, index)=>( 
                                <>
                                {
                                        <MorePosts 
                                            imageSource={dataBean.imageUrl} 
                                            tag={menuOptions[index]}
                                            authorName={dataBean.authorName}
                                            authorImage={dataBean.authorImage}
                                            title={dataBean.heading}
                                            metaContent={dataBean.shortContent}
                                            postedDate={dataBean.postedDate}
                                            readTime={dataBean.readTime}
                                            onClick = {() => this.setState({selectedId: dataBean.id, selectedName: dataBean.heading})}
                                        />
                                    
                                }
                                </>
                            ))}
                        </div>
                   
                
                
                </Container>
                              
                <Divider full={true}/>
                <Footer/>
                </div>
                :
                null
            }
            {this.renderRedirect()}
           
            </div>
        );
    }
};
export default withLastLocation(Home);