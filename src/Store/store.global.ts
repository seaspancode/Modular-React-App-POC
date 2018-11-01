import { observe } from "rxjs-observe"
import StoreA from './store.a';
import StoreB from './store.b';

const globalState = {
  user: {
    isLoggedIn: false
  }
}

const { observables, proxy } = observe(globalState);

export const logUserIn = (user: object) => {
  console.log('calling login')
  proxy.user = {
    isLoggedIn: true,
  }
}

observables.user.subscribe(user => {
  console.log(`DISPATCHING`);
  
  StoreA.dispatch({
    type: 'LOGGED_IN_A',
  })
  
  StoreB.dispatch({
    type: 'LOGGED_IN_B',
  })
})
