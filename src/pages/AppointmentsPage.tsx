import { makeStyles } from '@material-ui/core'
import { AppointmentsList, AddAppointmentModal } from '../components'

const useStyles = makeStyles({
  content: {
    maxWidth: '1440px',
    margin: '0 auto'
  },
  actionsWrapper: {
    display: 'flex'
  }
})

export const AppointmentsPage = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <div className={classes.actionsWrapper}>
        <AddAppointmentModal />
      </div>
      <AppointmentsList />
    </div>
  )
}

export default AppointmentsPage