import React from 'react';;
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
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
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
                <span>首页</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>此刻</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>树洞</span>
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
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
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