import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { object, string, date } from 'yup'
import { v4 as uuidv4 } from 'uuid'
import { addAppointment } from '../../actions'

const schema = object().shape({
  startDate: date().required(),
  endDate: date().required(),
  clinicianName: string().min(3).required(),
  patientName: string().min(3).required()
})

const useAddAppointmentModal = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(
    () => setOpen(!open),
    [open]
  )

  const handleSave = useCallback((values) => {
    const newItem = {
      ...values,
      id: uuidv4(),
      patient: {
        id: uuidv4(),
        name: values.patientName
      },
      status: 'ACTIVE'
    }

    setOpen(false)
    dispatch(addAppointment(newItem))
    formik.resetForm()
  }, [])

  const formik = useFormik({
    initialValues: {
      startDate: null,
      endDate: null,
      clinicianName: '',
      patientName: ''
    },
    onSubmit: handleSave,
    validationSchema: schema,
    enableReinitialize: true,
  });

  return {
    open,
    toggleOpen,
    formik
  }
}

export default useAddAppointmentModal