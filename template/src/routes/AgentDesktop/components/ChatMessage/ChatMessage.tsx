import React from 'react'
import { Box } from '@twilio-paste/core/box'
import { Input } from '@twilio-paste/core/input'
import { Button } from '@twilio-paste/core/button'
import { ReactComponent as SendIcon } from 'assets/icons/Send.svg'

function ChatMessage() {
  const [message, setMessage] = React.useState<string>('')

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexShrink={0} padding="space40">
        <Input
          type="text"
          id="message"
          placeholder="type message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(e.target.value)
          }}
        />
        <Box display="flex" marginLeft="space40">
          <Button variant="primary" size="icon_small">
            <SendIcon color="white" width="28" height="24" />
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default ChatMessage
