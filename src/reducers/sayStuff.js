import { WORD } from '../actions/index';

const INITIAL_STATE = {
  word: 'Hello'
};

function appState(state = INITIAL_STATE, action) {
  switch(action.type) {
    case WORD:
      return Object.assign({}, state, {word: action.payload});
    default:
      return state;
  }
}

export default appState;
