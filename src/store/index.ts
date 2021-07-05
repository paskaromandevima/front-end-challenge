import { combineReducers } from 'redux'
import appointmentsReducer from './appointments.reducer'

const appReducer = combineReducers({
  appointments: appointmentsReducer,
})

const rootReducer = (state, action) =>  appReducer(state, action)

export default rootReducer