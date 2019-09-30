import React, {Component} from 'react';
import {Layout, Row, Col, Divider, Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.min.css'
import './css/index.css'

class MainHeader extends Component {
    state = {
        current: '1'
    };

    render() {
        return (
            <div>
                <Layout.Header>
                    <Row type="flex" align="middle" className="header-container">
                        <Col md={6}>
                            <h1 className="logo">discussion</h1>
                        </Col>
                        <Col md={18} className="header-menu-wrap">
                            <Divider type="vertical" className="header-divider"/>
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item className="menu-link" key="1">
                                    <Icon type="mail"/>
                                    <Link to="/index/all">首页</Link>
                                </Menu.Item>
                                <Menu.Item className="menu-link" key="2">
                                    <Icon type="appstore"/>
                                    <Link to="/book">教程</Link>
                                </Menu.Item>
                               <Menu.Item className="menu-link"  key="3">
                                    <Icon type="dollar" />
                                    <Link to="/about">关于</Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>

                </Layout.Header>
            </div>

        );
    }

    handleClick = (e) => {
        let {key} = e;
        this.setState({
            current: key
        })
    }
}

export default MainHeader;
