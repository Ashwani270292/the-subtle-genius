import React,  { Component } from 'react';
import {Header, Container, Text, SideDrawer, Backdrop, Loader, FullScreenPost, 
    MorePosts, PostHeader, Footer, AuthorTags, MoreCategoryPost} from '../../components';
import { withLastLocation } from 'react-router-last-location';
import { HeaderSection,Divider, SubMenu, TitleContainer, AuthorContainer, 
    TagsContainer, SocialMediaShareContainer, ShareButton, 
     ReadLine, WhiteSpace} from '../../allStyles';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import { mocks } from '../../constants';
import './style.css';
import {FacebookShareButton, FacebookIcon, 
    TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon} from 'react-share';

class Article extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedId:'',
            savedContent:{},
            showSavedBlog: false,
            imageUrl: '',
            title:'',
            author:{},
            category:{},
            endorses:'',
            hashTags:[],
            menuOptions:[],
            createdDate:'',
            goBack:false,
            loading: true,
            sideDrawerOpen: false,
            morePosts: [],
            readLength:0,
            scrollHeight:0,
            outerHeight:0,
        }

    this.handleDimension = this.handleDimension.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

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

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.setState({menuOptions: mocks.menuOptions, selectedId: this.props.match.params.id, morePosts: mocks.morePosts});
        this.getArticle();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleDimension(){
        console.log('Height: ', window.outerHeight);
        this.setState({outerHeight: document.documentElement.scrollHeight});
    }
    handleScroll(){
        let actualHeight = document.documentElement.scrollHeight - window.outerHeight;
        let scrollHeight = 100-((actualHeight - window.scrollY) / actualHeight) * 100;
        console.log("Scroll left: ", scrollHeight);
        if(scrollHeight > 0){
            this.setState({readLength: scrollHeight});
        }else if(scrollHeight <= 0){
            this.setState({readLength: 0});
        }
    }

    getArticle(){
        axios.get(mocks.baseURL+`BlogPosts/${this.props.match.params.id}`)
        .then(res => {
            if(res.data != null && res.data.blogContent != null){

                    const sav = JSON.parse(res.data.blogContent);
                    this.setState({savedContent: sav, imageUrl: res.data.blogBannerImage, 
                        title: res.data.blogTitle, author: res.data.blogAuthor, category: res.data.blogCategory,
                    endorses: res.data.blogEndorses, hashTags:res.data.hashTag, });
                    this.setState({showSavedBlog: true, loading: false});
            }
            this.handleDimension();
            this.setState({ busy: false })
        })
    }


    renderSavedBlog(){
        const {showSavedBlog, savedContent} = this.state;
        if(showSavedBlog){
            console.log(savedContent);
            const markup = draftToHtml(savedContent);
            return(
                <div className="content" dangerouslySetInnerHTML={{__html: markup}} ></div>
            );
        }else{
            return(
                null
            );
        }
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
        const {showSavedBlog, menuOptions, loading, sideDrawerOpen, selectedId, title, category, author, morePosts} = this.state;
        let moreTitle = 'More From '+category.categoryName;
        let backDrop;
        if(sideDrawerOpen){
            console.log('Side Drawer true');
            backDrop = <Backdrop closeDrawer={this.drawerClose}/>;
        }
        if(loading){
            return(
                <Loader/>
            )
        }else{
            return(
                <div style={{height: "100%"}}>
                <HeaderSection>
                    <Header drawerClickHandler={this.drawerToggleClickHandler} homeClick={this.onBackPress.bind(this)}/>
                    <ReadLine length={this.state.readLength}/>
                </HeaderSection>
                <SideDrawer show={sideDrawerOpen} closeDrawer={this.drawerClose}/>
                {backDrop}
                <div style={{ overflowY: 'scroll'}}>
                
                <Container type={"articleBelowHeader"} onScroll={this.handleScroll.bind(this)}>
                   
                   <FullScreenPost
                       imageSource={'http://radicalnews.in/images/uploads/articlesImg/signaloud1.jpg'} 
                        tag={menuOptions[0]}
                        authorName={author.authorName}
                        title={'How To Make Your Template Look Amazing'}
                        postedDate={'20 Jan, 2020'}
                        readTime={'4 mins'}
                   />
                    <Container paddingLeftRight={`15em`} row={false}>
                    {showSavedBlog? this.renderSavedBlog() : null}
                    <Text textColor={`#777777`} textSize={`0.7em`}> Posted On 20 Jan, 2020 in 
                        <span style={{color:"#000", marginLeft:'0.4em', marginRight:'0.4em', cursor:'pointer'}}>{category.categoryName}</span>
                        category
                    </Text>

                    <AuthorTags tags={menuOptions} authorDetails={author}/>

                    <SocialMediaShareContainer>
                        <ShareButton>
                            <FacebookShareButton
                                url={`http://www.thesubtlegenius.com/article/${selectedId}`}
                                quote={title}
                            >
                                <FacebookIcon size={30} bgStyle={{fill: '#000'}}/>
                            </FacebookShareButton>
                        </ShareButton>
                        <ShareButton>
                            <TwitterShareButton
                                url={`http://www.thesubtlegenius.com/article/${selectedId}`}
                                quote={title}
                            >
                                <TwitterIcon size={30} bgStyle={{fill: '#000'}}/>
                            </TwitterShareButton>
                        </ShareButton>
                        <ShareButton>
                            <LinkedinShareButton
                                url={`http://www.thesubtlegenius.com/article/${selectedId}`}
                                quote={title}
                            >
                                <LinkedinIcon size={30} bgStyle={{fill: '#000'}}/>
                            </LinkedinShareButton>
                        </ShareButton>
                    </SocialMediaShareContainer>

                    </Container>

                    
                </Container>
                <Container  paddingLeftRight={`11.7em`}>

                <WhiteSpace/>
                <PostHeader title={moreTitle} onClick = {() => this.setState({selectedId: 'MORE'})}/>
                <div style={{display: 'grid', gridTemplateColumns:'auto auto'}}>
                    {morePosts.map((dataBean, index)=>( 
                        <>
                        {
                                <MoreCategoryPost 
                                    imageSource={dataBean.imageUrl} 
                                    tag={dataBean.category}
                                    authorName={dataBean.authorName}
                                    authorImage={dataBean.authorImage}
                                    title={dataBean.heading}
                                    metaContent={dataBean.shortContent}
                                    postedDate={dataBean.postedDate}
                                    readTime={dataBean.readTime}
                                    onClick = {() => this.setState({selectedId: dataBean.id})}
                                />
                            
                        }
                        </>
                    ))}
                </div>

                <WhiteSpace height={`4em`}/>
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
                                    onClick = {() => this.setState({selectedId: dataBean.id})}
                                />
                            
                        }
                        </>
                    ))}
                </div>
                </Container>

                <Divider full={true}/>
                <Footer/>
                
                   
                </div>

                {this.renderRedirect()}
                
                </div>
            );
        }
    }

}

export default withLastLocation(Article);