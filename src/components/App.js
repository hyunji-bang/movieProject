import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Movies from './Movies';
import styles from '../css/app.css';

class App extends React.Component {
    constructor(props){
        super(props);

    }


    render(){
        return (
                <div>
                    <Content title={ this.props.contentTitle }
                            body={ this.props.contentBody }/>
                </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default title',
    contentBody: 'Default Body'
};
export default App;
