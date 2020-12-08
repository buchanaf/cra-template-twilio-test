import React, { useState } from 'react'
import { Box } from '@twilio-paste/core/box'
import { Text } from '@twilio-paste/core/text'
import { Avatar } from '@twilio-paste/core/avatar'
import { Select, Option } from '@twilio-paste/core/select'

type AbilityStatuses = 'available' | 'unavailable' | 'break' | 'offline'

function EmptyTaskPanel() {
  const [availability, setAvailability] = useState<AbilityStatuses>('offline')

  return (
    <Box
      backgroundColor="colorBackgroundDark"
      padding="space40"
      display="flex"
      borderColor="colorBorderLight"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        as="h2"
        fontSize="fontSize20"
        textTransform="uppercase"
        letterSpacing="2px"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderPrimary"
        borderBottomWidth="borderWidth30"
        paddingX="space30"
        marginBottom="space100"
      >
        Status
      </Box>
      <Text
        as="strong"
        fontSize="fontSize70"
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight="fontWeightNormal"
        marginBottom="space40"
      >
        No Active Tasks
      </Text>
      <Text as="p" fontSize="fontSize20" color="colorTextInverseWeaker" marginBottom="space40">
        Change activity state to start receiving tasks.
      </Text>
      <Avatar size="sizeIcon110" name="Big Billy" />
      <Text as="p" fontSize="fontSize20" marginTop="space30" marginBottom="space60">
        Big Billy
      </Text>

      <Box maxWidth="200px">
        <Select
          id="author"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setAvailability(event.target.value as AbilityStatuses)
          }}
          value={availability}
        >
          <Option value="available">Available</Option>
          <Option value="offline">Offline</Option>
          <Option value="unavailable">Unavailable</Option>
          <Option value="break">Break</Option>
        </Select>
      </Box>
    </Box>
  )
}

export default EmptyTaskPanel
