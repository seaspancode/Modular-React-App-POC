import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

const reducerA = (state = { loggedIn: false, name: "" }, action: {type: string, payload: any}) => {

  switch ( action.type ) {
    case 'LOGGED_IN_A': {
      return {
        loggedIn: true,
        name: action.payload.name
      }
    }
    
    default: {
      return state;
    }
  }
}

(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  serialize: { 
    options: {
     function: (fn: any) =>  fn.toString(),
     instanceId: 'a store',
     undefined: true,
    }
  }
})

const StoreA = createStore(
  reducerA,
  composeWithDevTools()
)

export default StoreA 