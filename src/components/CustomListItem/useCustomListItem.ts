import { IAppointmentItem } from 'src/types/appointments'

const useCustomListItem = (item: IAppointmentItem) => {
  const date = new Date(item.startDate)
  const endDate = new Date(item.endDate)
  const startTime = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(date)
  const startDate = new Intl.DateTimeFormat('en-US').format(date)
  const duration = (endDate.valueOf() - date.valueOf())/60000
  const isLong = duration > 60
  
  return {
    startTime,
    startDate,
    duration,
    isLong
  }
}

export default useCustomListItem