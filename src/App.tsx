import * as React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import ComponentA from './Components/a.component';
import ComponentB from './Components/b.component';
import Home from './Components/home.compent';
import StoreA from './Store/store.a';
import StoreB from './Store/store.b';
import StoreGlobal from './Store/store.global';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Provider store={StoreGlobal}>
              <Route exact={true} path="/" component={Home} />
            </Provider>
            <Provider store={StoreA}>
              <Route path="/a" component={ComponentA} />
            </Provider>
            <Provider store={StoreB}>
              <Route path="/b" component={ComponentB} />
            </Provider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
