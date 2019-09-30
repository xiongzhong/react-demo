import React, {Component} from 'react';
import {Row, Col} from 'antd'
import 'antd/dist/antd.min.css'
import './css/index.css'
import IndexMenu from "./childCom/indexMenu";
import IndexBody from "./childCom/indexBody";
class Index extends Component {
    render() {
        return (
            <Row className="index-container">
                <Col md={6}>
                    <IndexMenu {...this.props.match.params}/>
                </Col>
                <Col md={18}>
                    <IndexBody {...this.props.match.params}/>
                </Col>
            </Row>
        );
    }
}

export default Index;
