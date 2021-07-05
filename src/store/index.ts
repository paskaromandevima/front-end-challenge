import { AnyAction, combineReducers, createStore } from 'redux'
import { IState } from '../types'
import appointmentsReducer from './appointments.reducer'

const appReducer = combineReducers<IState>({
  appointments: appointmentsReducer,
})

export const rootReducer = (state: IState, action: AnyAction) => appReducer(state, action)

export const store = createStore(rootReducer)