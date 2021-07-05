type Status = 'CANCELLED' | 'ACTIVE'

interface IPatient {
  id: string,
  name: string
}

export interface IAppointmentItem {
  id: string,
  startDate: string,
  endDate: string,
  clinicianName: string,
  patient: IPatient,
  status: Status
}