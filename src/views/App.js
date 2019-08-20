import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, NavLink as Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Home from './topics/home';
import Now from './topics/now';
import Complains from './topics/complains';
const { Header, Sider, Content, Footer } = Layout;

class App extends React.Component {


  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Layout>
          <Header>Header</Header>
        </Layout>
        <Layout>
          <BrowserRouter>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to='/'>
                    <Icon
                      className="trigger"
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.toggle}
                    />
                    <span>首页</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/now'>
                    <Icon type="video-camera" />
                    <span>即刻</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to='/complains'>
                    <Icon type="upload" />
                    <span>树洞</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="yuque" />
                  <span>沙雕</span>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="behance" />
                  <span>爆料</span>
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="question" />
                  <span>求助</span>
                </Menu.Item>
                <Menu.Item key="7">
                  <Icon type="like" />
                  <span>安利</span>
                </Menu.Item>
                <Menu.Item key="8">
                  <Icon type="api" />
                  <span>同好</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <Route exact path='/' component={Home} />
                <Route path='/now' component={Now} />
                <Route path='/complains' component={Complains} />
              </Content>
            </Layout>
          </BrowserRouter>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default connect(
  state => ({
    collapsed: false
  })
)(App);