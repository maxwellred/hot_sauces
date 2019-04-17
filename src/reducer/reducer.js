// Action Constants
const LOAD_SAUCES = 'LOAD_SAUCES';
const DELETE_SAUCE = 'DELETE_SAUCE';
const SAUCE_DETAILS = 'SAUCE_DETAILS';

// Action Creators
export const loadSauces = payload => {
  return dispatch => {
    return dispatch({ type: LOAD_SAUCES, payload });
  };
};

export const deleteSauce = payload => {
  return dispatch => {
    return dispatch({ type: DELETE_SAUCE, payload });
  };
};

export const sauceDetails = payload => {
  return dispatch => {
    return dispatch({ type: SAUCE_DETAILS, payload });
  };
};

// Initial State
let initialState = {
  list: [],
  selected: {}
};

// Reducer
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'LOAD_SAUCES':
      return { ...state, ...(state.list = [...payload]) };

    case 'DELETE_SAUCE':
      state.list.forEach((ele, i) => {
        if (ele.id == payload) {
          state.list.splice(i, 1);
        }
      });
      return { ...state, ...(state.list = [...state.list]) };

    case 'SAUCE_DETAILS':
      let selectedSauce = {};
      state.list.forEach((ele, i) => {
        if (ele.id == payload) {
          selectedSauce = { ...state.list[i] };
        }
      });
      return { ...state, ...(state.selected = selectedSauce) };
    default:
      return state;
  }
};