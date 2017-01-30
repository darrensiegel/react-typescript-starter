import {makeActionCreator} from './utils';

export module exampleActions {
  export const SELECT_ITEM = 'SELECT_ITEM';

  export const selectItem = makeActionCreator(SELECT_ITEM, 'guid');
}
