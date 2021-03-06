/*
 * DiscountReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { 
  LOAD_PROMOS, 
  CHANGE_VALUE, 
  CHANGE_NEW_PROMO, 
  RESET_CRT_PROMO_FORM, 
  SELECT_PROMO,
  CREATE_PROMO,
  REMOVE_PROMO} from './constants';

// The initial state of the App
export const initialState = {
  categories: [],
  promos: [],
  new_promo: {},
  products:[],
  is_visible_crt_modal: false,
  selected_promo: '',
};

/* eslint-disable default-case, no-param-reassign */
const PromosReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROMOS:
        draft.promos = action.promos;
        break;
      case CHANGE_VALUE:
        draft[action.event.name] = action.event.value;
        break;
      case CHANGE_NEW_PROMO: 
        draft.new_promo = action.new_promo;
        break;
      case RESET_CRT_PROMO_FORM:
        draft.new_promo = {
          type:'1',
          porcentage:'',
          porduct:'',
          expiration_date: new Date(),
        };
        draft.is_visible_crt_modal = false;
        break;
      case SELECT_PROMO:
        console.log('select select')
        draft.selected_promo = action.id; 
        break;
      case CREATE_PROMO:
        draft.promos = draft.promos.concat(action.promo)
        break;
      case REMOVE_PROMO:
        draft.promos = draft.promos.filter(p => p._id !== action.promo_id)
        break;
    }
  });

export default PromosReducer;