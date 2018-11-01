import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { Observable } from 'rxjs';
import StoreA from './store.a';
import StoreB from './store.b';

const reducerGlobal = (state = { loggedIn: false, name: "" }, action: { type: string, payload: any }) => {

  switch (action.type) {
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
      function: (fn: any) => fn.toString(),
      instanceId: 'b store',
      undefined: true,
    }
  }
})

const StoreGlobal = createStore(
  reducerGlobal,
  composeWithDevTools()
)

interface IUser {
  name: string
}

function getState$(store: any) {
  return new Observable((observer: any) => {
    const unsubscribe = store.subscribe(() => {
      observer.next(store.getState());
    });
    return unsubscribe
  });
}

const globalState$ = getState$(StoreGlobal);

globalState$.subscribe((state: any) => { 
  console.log("DISPATCHING");
  StoreA.dispatch({
    payload: { name: state.name },
    type: 'LOGGED_IN_A'
  })

  StoreB.dispatch({
    payload: { name: state.name },
    type: 'LOGGED_IN_B'
  })
})

export const logUserIn = (user: IUser) => {
  return {
    payload: { name: user.name },
    type: 'LOGGED_IN_A'
  }
}

export default StoreGlobal