import { IState } from "../types"
import { IAppointmentItem } from "../types/appointments"

export const getAllAppointments = ({ appointments }: IState): IAppointmentItem[] | [] => appointments.data
