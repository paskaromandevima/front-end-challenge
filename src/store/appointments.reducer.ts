import { AnyAction } from 'redux'
import { IAppointmentItem } from 'src/types/appointments'
import * as actions from '../actions'
import { IAppointmentsState } from '../types'

const initialState: IAppointmentsState = {
  data: []
};

const appointmentsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actions.SET_ALL_APPOINTMENTS:
      const sortedData = action.data.sort((a: IAppointmentItem, b: IAppointmentItem) => {
        return new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf();
      });

      return {
        ...state,
        data: sortedData
      }
    case actions.DELETE_APPOINTMENT:
      const newData = state.data?.filter(el => el.id !== action.data)
      
      return {
        ...state,
        data: newData
      }
    case actions.ADD_APPOINTMENT:
      return {
        ...state,
        data: [...state.data, action.data]
      }
    default:
      return state;
  }
};

export default appointmentsReducer;
