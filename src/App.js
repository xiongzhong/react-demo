import React from 'react';
import RouterIndex from "./routers";
import MainHeader from "./view/header";
import MainFooter from "./view/footer";

class App extends React.Component {

    render() {
        return (
            <div id="app" className="app-container">
                <MainHeader/>
                <RouterIndex/>
                <MainFooter/>
            </div>
        );
    }
}
export default App;
