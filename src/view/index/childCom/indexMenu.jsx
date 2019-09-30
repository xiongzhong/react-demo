import React, {Component} from 'react';
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
class IndexMenu extends Component {
    render() {
        return (
            <Menu mode="vertical" selectedKeys={[this.props.tab]}>
                <Menu.Item className="menu-link" key="all">
                    <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item className="menu-link" key="good">
                    <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item className="menu-link"  key="ask">
                    <Link to="/index/ask">问答</Link>
                </Menu.Item>
                <Menu.Item className="menu-link"  key="share">
                    <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item className="menu-link"  key="job">
                    <Link to="/index/job">招聘</Link>
                </Menu.Item>
                <Menu.Item className="menu-link"  key="dev">
                    <Link to="/index/dev">测试</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default IndexMenu;
