import React, {Component} from 'react';
import {Tag} from 'antd'
class Index extends Component {
    render() {
        return (
            <Tag color={this.getTag(this.props.data).color}>{this.getTag(this.props.data).title}</Tag>
        );
    }
    getTag(data) {
        if(data) {
            let map = new Map([
                ['ask', {title: '问答', color: 'green'}],
                ['share', {title: '分享', color: 'purple'}],
                ['job', {title: '招聘', color: 'orange'}],
                ['dev', {title: '测试', color: 'blue'}]
            ]);
            if (data.top) {
                return {title: '置顶', color: 'red'}
            } else if (data.good) {
                return {title: '精华', color: 'cyan'}
            }else {
                return map.get(data.tab)
            }
        } else {
            return {title: '', color: ''}
        }

    }
}

export default Index;
