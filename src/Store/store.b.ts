import { combineReducers, createStore } from 'redux'

const reducerB = (state = { loggedIn: false }, action: {type: string, payload: any}) => {

  switch ( action.type ) {
    case 'LOGGED_IN_B': {
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
  reducerB
});

const StoreB = createStore(allReducers)

export default StoreB 