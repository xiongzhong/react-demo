import React, {Component} from 'react';
import axios from 'axios'
import {Card, Avatar, List} from 'antd'
import Tag from '../../components/tag'

class Details extends Component {
    state = {
        data: {
            title: '',
            author: {
                avatar_url: '',
                loginname: ''
            },
            create_at: '',
            top: true,
            content: '',
            replies: []
        },
        loading: true
    }

    render() {
        return (
            <div>
                <Card loading={this.state.loading} title={
                    <div>
                        <h1>{this.state.data.title}</h1>
                        <Tag data={this.state.data}/>
                        <Avatar src={this.state.data.author.avatar_url}/>
                        <span>{this.state.data.author.loginname}</span>
                        <span>{this.state.data.create_at}</span>
                    </div>
                }>
                    <Card.Meta
                        description={
                            <div className={'description'}
                                 dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
                        }
                    />
                </Card>

                <List dataSource={this.state.data.replies} renderItem={
                    item => (
                        <List.Item>
                            <List.Item.Meta className="list-meta"
                                avatar={
                                    <Avatar src={item.author.avatar_url}/>
                                }
                                title={
                                    <div>

                                        {`${item.author.loginname}发表于：${item.create_at}`}
                                    </div>
                                }
                                description={
                                    <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                                }
                            />
                        </List.Item>
                    )
                }>

                </List>
            </div>
        );
    }

    getDetailsList() {
        let {id} = this.props.match.params;
        let url = `https://cnodejs.org/api/v1/topic/${id}`;
        this.setState({loading: true})
        axios.get(url).then(res => {
            let data = res.data.data;
            console.log(data)
            this.setState({data})
        }).finally(() => {
            this.setState({loading: false})
        })
    }

    UNSAFE_componentWillMount() {
        this.getDetailsList()
    }
}

export default Details;
