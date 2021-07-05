import { IAppointmentItem } from './appointments'
export interface IState {
  appointments: IAppointmentsState
}

export interface IAppointmentsState {
  data: IAppointmentItem[] | []
}
