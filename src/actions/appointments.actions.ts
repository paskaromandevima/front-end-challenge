import { IAppointmentItem } from "../types/appointments"

export const SET_ALL_APPOINTMENTS = 'SET_ALL_APPOINTMENTS'
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT'

export const setAllAppointments = (data: IAppointmentItem[]) => ({
  type: SET_ALL_APPOINTMENTS,
  data
})

export const deleteAppointment = (data: string) => ({
  type: DELETE_APPOINTMENT,
  data
})

export const addAppointment = (data: IAppointmentItem) => ({
  type: ADD_APPOINTMENT,
  data
})