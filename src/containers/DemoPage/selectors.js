import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDemo = state => state.demo || initialState;

const makeSelectNumber = () =>
  createSelector(
    selectDemo,
    empState => empState.number,
  );

const makeSelectName = () =>
  createSelector(
    selectDemo,
    empState => empState.name,
  );

export { makeSelectNumber, makeSelectName };