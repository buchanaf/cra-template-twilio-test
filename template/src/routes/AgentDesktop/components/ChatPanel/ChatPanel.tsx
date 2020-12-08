import React from 'react'
import { Box } from '@twilio-paste/core/box'
import { Text } from '@twilio-paste/core/text'
import { Button } from '@twilio-paste/core/button'
import { Separator } from '@twilio-paste/core/separator'
import { Tabs, Tab, TabList, useTabState } from '@twilio-paste/core/tabs'
import { ChatMessage } from '../ChatMessage'
import { ChatBubble } from '../ChatBubble'

function ChatPanel() {
  const tabState = useTabState()

  return (
    <Box as="section" flex="3">
      <Box display="flex" justifyContent="space-between" padding="space40">
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Text textAlign="left" as="span" fontWeight="fontWeightBold" lineHeight="lineHeight10">
            Customer
          </Text>
          <Text as="span" fontSize="fontSize10" lineHeight="lineHeight10">
            Live | 04:27:05
          </Text>
        </Box>
        <Button variant="destructive">End Chat</Button>
      </Box>

      <Separator orientation="horizontal" />
      <Tabs selectedId="chat" variant="fitted" state={tabState}>
        <Box height="calc(100% - 60px)" display="flex" flexDirection="column">
          <Box flexShrink={0}>
            <TabList aria-label="Chat and Info Tabs">
              <Tab id="chat">Chat</Tab>
              <Tab id="info">Info</Tab>
            </TabList>
          </Box>
          <Box flex="1" overflow="auto">
            <Box
              aria-labelledby="chat"
              aria-hidden={tabState.currentId !== 'chat'}
              role="tabpanel"
              height="100%"
              display={tabState.currentId === 'chat' ? 'flex' : 'none'}
              flexDirection="column"
              justifyContent="flex-end"
              paddingX="space40"
            >
              <ChatBubble
                variant="customer"
                author="customer"
                date="11/19/1988"
                message="Hello, hello, hello"
              />
              <ChatBubble
                variant="agent"
                author="customer"
                date="11/19/1988"
                message="Hello, hello, hello"
              />
            </Box>

            <Box
              aria-labelledby="info"
              aria-hidden={tabState.currentId !== 'info'}
              role="tabpanel"
              height="100%"
              display={tabState.currentId === 'info' ? 'flex' : 'none'}
              flexDirection="column"
              justifyContent="flex-end"
            >
              Tab 2
            </Box>
          </Box>
          {tabState.currentId === 'chat' && (
            <>
              <Separator orientation="horizontal" />
              <ChatMessage />
            </>
          )}
        </Box>
      </Tabs>
    </Box>
  )
}

export default ChatPanel
