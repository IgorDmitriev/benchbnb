import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/auth_actions.js';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };

    case RECEIVE_ERRORS:
      return Object.assign({}, state, {
        errors: action.errors
      });

    default:
      return state;
  }
};

export default SessionReducer;
