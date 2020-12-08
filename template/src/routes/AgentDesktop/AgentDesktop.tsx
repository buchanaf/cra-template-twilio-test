import { Box } from '@twilio-paste/core/box'
import { ChatPanel, CRMPanel, EmptyTaskPanel, TaskPanel } from './components'

function AgentDesktop() {
  return (
    <Box height="100%" display="flex">
      <Box
        flex="1"
        display="flex"
        borderRightStyle="solid"
        borderRightColor="colorBorderLight"
        borderRightWidth="borderWidth10"
      >
        {false && <EmptyTaskPanel />}
        {true && <TaskPanel />}
        {true && <ChatPanel />}
      </Box>
      <CRMPanel />
    </Box>
  )
}

export default AgentDesktop
