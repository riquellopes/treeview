import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import generateTree from './generateTree';
import reducer from './reducers';
import Node from './containers/Node';

const tree = generateTree();
const store = createStore(reducer, tree)

ReactDOM.render(
  <Provider store={store}>
      <Node id={0}/>
  </Provider>,
  document.getElementById('root')
);
