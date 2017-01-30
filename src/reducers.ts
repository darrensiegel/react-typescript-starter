
import { combineReducers } from 'redux'

import { exampleActions } from './actions/example';

function selectedItem(state = null, action): Object {
  switch(action.type) {
  case exampleActions.SELECT_ITEM:
    return action.guid;
  default:
    return state;
  }
}


// The global application state:

const reducers = combineReducers({
  selectedItem          // UUIDs of satellites
});


export default reducers;
