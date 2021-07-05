import clsx from 'clsx'
import { ListItem, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { ICustomListItemProps } from './types'
import useStyles from './styles'
import useCustomListItem from './useCustomListItem'

export const CustomListItem = ({ item, handleDelete }: ICustomListItemProps) => {
  const classes = useStyles()
  const { startTime, duration, startDate, isLong } = useCustomListItem(item)

  return (
    <ListItem>
      <div className={clsx(classes.row, isLong && classes.highlight)}>
        <div className={classes.col}>{item.patient.name}</div>
        <div className={classes.col}>{startDate}</div>
        <div className={classes.col}>{startTime}</div>
        <div className={classes.col}>{`${duration} min`}</div>
        <div className={classes.col}>{item.clinicianName}</div>
      </div>
      <ListItemSecondaryAction>
        <IconButton onClick={() => handleDelete(item.id)} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CustomListItem