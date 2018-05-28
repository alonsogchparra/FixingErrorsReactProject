import { AUTH_USER, UNAUTH_USER } from '../actions/types';

export default(state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
      break;

    case UNAUTH_USER:
      return { ...state, authenticated: false };
      break;
  
    default:
      return state;
      break;
  }
}