import { IAppointmentItem } from 'src/types/appointments'

export interface ICustomListItemProps {
  item: IAppointmentItem
  handleDelete(id: string): void
}