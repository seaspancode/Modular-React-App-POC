import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

const reducerA = (state = { loggedIn: false }, action: {type: string, payload: any}) => {

  switch ( action.type ) {
    case 'LOGGED_IN_A': {
      return {
        loggedIn: true,
      }
    }
    
    default: {
      return state;
    }
  }
}

const allReducers = combineReducers({
  reducerA
});

(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  serialize: { 
    options: {
     function: (fn: any) =>  fn.toString(),
     name: 'a store',
     undefined: true,
    }
  }
})

const StoreA = createStore(
  allReducers,
  composeWithDevTools()
)

export default StoreA 