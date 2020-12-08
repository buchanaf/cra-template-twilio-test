import { Box } from '@twilio-paste/core/box'
import { TaskItem } from '../TaskItem'

function TaskPanel() {
  return (
    <Box
      as="section"
      backgroundColor="colorBackgroundDark"
      flex="2"
      borderRightStyle="solid"
      borderRightColor="colorBorderLight"
      borderRightWidth="borderWidth10"
    >
      <TaskItem />
    </Box>
  )
}

export default TaskPanel
