import * as actions from '../actions'

const initialState = {
  data: null
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_APPOINTMENTS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
};

export default appointmentsReducer;
