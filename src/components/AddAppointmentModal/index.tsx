import { Button, Modal, TextField } from '@material-ui/core';
import useAddAppointmentModal from './useAddAppointmentModal'
import { DateTimePicker } from "@material-ui/pickers";
import useStyles from './styles'

export const AddAppointmentModal = () => {
  const classes = useStyles()
  const { open, toggleOpen, formik } = useAddAppointmentModal()

  return (
    <div>
      <Button color='primary' variant='contained' onClick={toggleOpen}>
        Add Appointment
      </Button>
      <Modal
        open={open}
        onClose={toggleOpen}
        className={classes.wrapper}
      >
        <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
          <DateTimePicker
            disablePast
            name='startDate'
            label="Start time"
            inputVariant="outlined"
            value={formik.values.startDate}
            onChange={(date) => formik.setFieldValue('startDate', date)}
            error={!!formik.errors.startDate}
            helperText={formik.errors.startDate}
          />
          <DateTimePicker
            disablePast
            name='endDate'
            label="Start time"
            inputVariant="outlined"
            value={formik.values.endDate}
            onChange={(date) => formik.setFieldValue('endDate', date)}
            error={!!formik.errors.endDate}
            helperText={formik.errors.endDate}
          />
          <TextField
            name='patientName'
            label="Patient name" 
            variant="outlined"
            value={formik.values.patientName}
            onChange={formik.handleChange}
            error={!!formik.errors.patientName}
            helperText={formik.errors.patientName}
          />
          <TextField
            name='clinicianName'
            label="Clinician name" 
            variant="outlined"
            value={formik.values.clinicianName}
            onChange={formik.handleChange}
            error={!!formik.errors.clinicianName}
            helperText={formik.errors.clinicianName}
          />
          <Button color='primary' variant='contained' type='submit'>
            Save Appointment
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default AddAppointmentModal