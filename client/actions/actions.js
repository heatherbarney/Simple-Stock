import * as types from './actionTypes';

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item,
});

export const deleteItem = item => ({
  type: types.DELETE_ITEM,
  payload: item,
})