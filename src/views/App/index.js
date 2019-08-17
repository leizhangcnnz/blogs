import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { increment } from '../../actions/index';
import { Button, Tag } from 'antd';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.dispatch(increment())
    }

    onClick2() {
        this.props.dispatch({ type: 'INCREMENT_ASYNC' })
    }

    render() {
        return (
            <div>
                <div>react-router Test</div>
                <nav>
                    <ul>
                    <li>
                        <Link to="/about/">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/users/">Page 2</Link>
                    </li>
                    </ul>
                </nav>

                <br/>
                <Tag>redux & redux-saga Test</Tag>
                <div>current number： {this.props.number} <Button type='primary' onClick={()=>this.onClick()}>Click +1</Button></div>
                <div>current number： {this.props.number} <Button type='primary' onClick={()=>this.onClick2()}>Click 2 seconds later +1</Button></div>
            </div>
        );
    }
}
export default connect(
    state => ({
        number: state.number
    })
)(App);