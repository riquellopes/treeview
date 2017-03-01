import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


export class Node extends Component {
    handleIncrement () {
        const { increment, id} = this.props;
        increment(id);
    }

    handleAddChild = event => {
        event.preventDefault();

        const {addChild, createNode, id} = this.props;
        const childId = createNode().nodeId;
        addChild(id, childId);
    }

    handleRemove = event => {
        event.preventDefault();

        const {removeChild, deleteNode, parent_id, id} = this.props;
        removeChild(parent_id, id);

        deleteNode(id);
    }

    renderChild = child_id => {
        const { id } = this.props;
        return (
            <li key={child_id}>
                <ConnectedNode id={child_id} parent_id={id}/>
            </li>
        )
    }

    render () {
        const {counter, parent_id, childIds } = this.props;

        return (
            <div>
                Counter: {counter} {' '}
                <button onClick={this.handleIncrement.bind(this)}>+</button> {' '}
                {typeof parent_id !== 'undefined' &&
                    <a href="#" onClick={this.handleRemove.bind(this)}
                        style={{ color: 'lightgray', textDecoration: 'none' }}>
                        x
                    </a>
                }
                <ul>
                     {childIds.map(this.renderChild)}
                     <li key="add">
                        <a href="#" onClick={this.handleAddChild.bind(this)}>Add child</a>
                     </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, own_props) => {
    return state[own_props.id];
}

const ConnectedNode = connect(mapStateToProps, actions)(Node);
export default ConnectedNode;
