import { Provider } from 'react-redux'
import { store } from './store'
import AppointmentsPage from './pages/AppointmentsPage'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppointmentsPage />
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

export default App