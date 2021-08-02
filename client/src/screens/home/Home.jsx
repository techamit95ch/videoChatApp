import React from 'react';
import { Layout } from 'antd';
import TopBar from '../../components/topBar/TopBar';
import VideoPlayer from '../../components/videoPlayer/VideoPayer';
import Options from '../../components/options/Options';
const { Header, Footer, Sider, Content ,Row, Col, Divider } = Layout;

 const Home = (props) => {
    return (
        <>
            
            <Layout>
        
      <Content>
      <TopBar/>
        <VideoPlayer />
        
      </Content>
      <Footer>Footer</Footer>
    </Layout>
        </>
    )
}



export default Home;
