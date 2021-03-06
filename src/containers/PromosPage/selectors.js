/**
 * DiscountsPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const  selectPromos= state => state.promos || initialState;

const makeSelectParam = (param) =>
  createSelector(
    selectPromos,
    selectPromos => selectPromos[param],
  )

const makeSelectNewPromo = () =>
  createSelector(
    selectPromos,
    discountsState => discountsState.new_promo,
  );



  export { makeSelectNewPromo, makeSelectParam };