import React, {Component} from 'react';
import {Layout} from 'antd'
import 'antd/dist/antd.min.css'
class MainFooter extends Component {
    render() {
        return (
            <Layout.Footer style={{textAlign: 'center'}}>
                <div>页脚组件</div>
            </Layout.Footer>
        );
    }
}

export default MainFooter;
