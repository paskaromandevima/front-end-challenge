import { List } from '@material-ui/core'
import useAppointmentsList from './useAppointmentsList'
import { CustomListItem } from '../CustomListItem'

export const AppointmentsList = (): JSX.Element => {
  const { appointments, handleDelete } = useAppointmentsList()

  // displayed only ACTIVE appointments
  return (
    <List>
      {appointments?.map((item) => (
        item.status !== 'CANCELLED' && <CustomListItem  key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </List>
  )
}

export default AppointmentsList