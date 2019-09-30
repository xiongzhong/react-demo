import React, {Component} from 'react';
import axios from 'axios'
import {List, Avatar, Pagination} from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Tag from '../../../components/tag'
class IndexBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            page: 1,
            loading: false,
        };
    }
    render() {
        let {data} = this.props;
        return (
            <div className="index-body">
                <List
                    dataSource={data}
                    loading={this.state.loading}
                    renderItem={
                        item => (
                            <List.Item actions={[`回复：${item.reply_count}`, `访问：${item.visit_count}`]}>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src={item.author.avatar_url}/>
                                    }
                                    title={
                                        <div>

                                            <Tag data={item}/>
                                            <Link to={`/details/${item.id}`}>{item.title}</Link>
                                        </div>
                                    }
                                    description={`${item.author.loginname}发表于：${item.create_at}`}
                                />
                            </List.Item>
                        )
                    }>
                </List>

                <Pagination className="paging" showQuickJumper current={this.state.page} defaultCurrent={1} total={500} onChange={this.onChange.bind(this)} />
            </div>
        );
    }

    getData(tab = this.props.tab) {
        this.setState({loading: true})
        this.props.dispatch(dispatch => {
            let url = 'https://cnodejs.org/api/v1/topics';
            let params = {
                tab: tab,
                limit: this.state.limit,
                page: this.state.page
            };
            axios.get(url, {params}).then(res => {
                let data = res.data.data;
                dispatch({
                    type: 'SET_LIST',
                    data: {
                        data: data
                    }
                })
            }).finally(() => {
                this.setState({loading: false})
            })
        });

    }
    onChange(value) {console.log(value)
        this.setState({page: value}, () => {
            this.getData()
        });
    }
    UNSAFE_componentWillMount() {
        this.getData()
    }

    componentDidMount() {
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.tab !== this.props.tab) {
            this.setState({page: 1}, () => {
                this.getData(nextProps.tab);
            });
        }
    }
}

export default connect(state => state.list)(IndexBody);
