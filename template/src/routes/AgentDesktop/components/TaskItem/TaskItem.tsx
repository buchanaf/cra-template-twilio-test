import { Box } from '@twilio-paste/core/box'
import { Text } from '@twilio-paste/core/text'
import { Button } from '@twilio-paste/core/Button'
import { ReactComponent as ConversationIcon } from 'assets/icons/Conversation.svg'
import { CheckboxCheckIcon } from '@twilio-paste/icons/esm/CheckboxCheckIcon'
import { CloseIcon } from '@twilio-paste/icons/esm/CloseIcon'

function TaskItem() {
  return (
    <Box
      as="span"
      display="flex"
      minWidth="100%"
      backgroundColor="colorBackgroundBody"
      borderBottomStyle="solid"
      borderBottomColor="colorBorderLight"
      borderBottomWidth="borderWidth10"
    >
      <Box
        display="flex"
        width="45px"
        height="45px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="colorBackgroundWarning"
      >
        <ConversationIcon color="white" height="24" width="24" />
      </Box>
      <Box
        paddingX="space40"
        paddingY="space10"
        display="flex"
        flex="1"
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Text textAlign="left" as="span" fontWeight="fontWeightBold" lineHeight="lineHeight10">
            Customer
          </Text>
          <Text as="span" fontSize="fontSize10" lineHeight="lineHeight10">
            Incoming Chat Request
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box marginRight="space40">
            <Button variant="primary" size="icon_small">
              <CheckboxCheckIcon title="Accept Task" decorative={false} />
            </Button>
          </Box>
          <Button variant="destructive" size="icon_small">
            <CloseIcon title="Reject Task" decorative={false} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TaskItem
