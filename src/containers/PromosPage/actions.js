/*
 * Discount Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { 
  LOAD_PROMOS, 
  CHANGE_VALUE, 
  CHANGE_NEW_PROMO, 
  SAVE_PROMO, 
  RESET_CRT_PROMO_FORM, 
  DELETE_PROMO, 
  SELECT_PROMO,
  CREATE_PROMO,
  REMOVE_PROMO} from './constants';


export function loadPromos(promos) {
    return {
      type: LOAD_PROMOS,
      promos,
    };
}

export function changeNewPromo(new_promo) {
  return {
    type: CHANGE_NEW_PROMO,
    new_promo,
  };
}

export function changeValue(event) {
  return {
    type: CHANGE_VALUE,
    event,
  };
}

export function savePromo() {
  return {
    type: SAVE_PROMO,
  };
}

export function resetCreatePromoForm() {
  return {
    type: RESET_CRT_PROMO_FORM,
  };
}

export function deletePromo() {
  return {
    type: DELETE_PROMO,
  };
}

export function selectPromo(id) {
  return {
    type: SELECT_PROMO,
    id,
  };
}

export function createPromo(promo) {
  return {
    type: CREATE_PROMO,
    promo,
  };
}

export function removePromo(promo_id) {
  return {
    type: REMOVE_PROMO,
    promo_id,
  };
}