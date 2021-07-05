import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllAppointments } from '../../selectors'
import data from '../../../data.json'
import { setAllAppointments, deleteAppointment } from '../../actions'
import { IAppointmentItem } from 'src/types/appointments'

const useAppointmentsList = () => {
  const appointments = useSelector(getAllAppointments)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAllAppointments(data as IAppointmentItem[]))
  }, [])

  const handleDelete = useCallback(
    (id) => dispatch(deleteAppointment(id)),
    [],
  )

  return {
    appointments,
    handleDelete
  }
}

export default useAppointmentsList