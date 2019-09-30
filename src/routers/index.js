import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Index from "../view/index";
import About from "../view/about";
import Details from "../view/details";
import User from "../view/user";
import Book from "../view/book";
class RouterIndex extends Component {
    render() {
        return (
            <div className="wrapper" >
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/index/all"/>
                    )} />
                    <Route path="/index/:tab" component={Index} />
                    <Route path="/about" component={About} />
                    <Route path="/details/:id" component={Details} />
                    <Route path="/user" component={User} />
                    <Route path="/book" component={Book} />
                </Switch>

            </div>
        );
    }
}

export default RouterIndex;
