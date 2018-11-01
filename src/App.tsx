import * as React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import ComponentA from './Components/a.component';
import ComponentB from './Components/b.component';
import StoreA from './Store/store.a';
import StoreB from './Store/store.b';
import { logUserIn } from './Store/store.global';


class App extends React.Component {

  public componentWillMount() {
    logUserIn({ name: 'Daria'})
  }

  public render() {
    return (
      <div className="App">
        Parent
        <Provider store={StoreB}>
          <ComponentB />
        </Provider>
        <Provider store={StoreA} >
          <ComponentA />
        </Provider>
      </div>
    );
  }
}

export default App;
