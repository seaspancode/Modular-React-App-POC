import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

const reducerB = (state = { loggedIn: false, name: "" }, action: {type: string, payload: any}) => {

  switch ( action.type ) {
    case 'LOGGED_IN_B': {
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
      function: (fn: any) => fn.toString(),
      instanceId: 'b store',
      undefined: true,
    }
  }
})

const StoreB = createStore(
  reducerB,
  composeWithDevTools()
)

export default StoreB 