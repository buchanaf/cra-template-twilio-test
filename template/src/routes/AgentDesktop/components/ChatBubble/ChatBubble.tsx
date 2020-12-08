import { Text } from '@twilio-paste/core/text'
import { Box } from '@twilio-paste/core/box'

interface ChatBubbleProps {
  variant: 'agent' | 'customer'
  message: string
  date: string
  author: string
}

function ChatBubble(props: ChatBubbleProps) {
  const { variant, message, date, author } = props
  const isAgent = variant === 'agent'

  return (
    <Box
      alignSelf={isAgent ? 'flex-end' : 'flex-start'}
      width="80%"
      borderRadius="borderRadius20"
      paddingX="space30"
      paddingTop="space20"
      paddingBottom="space40"
      marginBottom="space40"
      backgroundColor={isAgent ? 'colorBackgroundPrimaryDarkest' : 'colorBackgroundPrimaryLightest'}
    >
      <Box display="flex" justifyContent="space-between">
        <Text
          fontWeight="fontWeightBold"
          fontSize="fontSize10"
          color={isAgent ? 'colorTextBrandInverse' : 'colorText'}
          as="span"
        >
          {author}
        </Text>
        <Text
          color={isAgent ? 'colorTextBrandInverse' : 'colorText'}
          fontSize="fontSize10"
          as="span"
        >
          {date}
        </Text>
      </Box>
      <Text color={isAgent ? 'colorTextBrandInverse' : 'colorText'} fontSize="fontSize20" as="p">
        {message}
      </Text>
    </Box>
  )
}

export default ChatBubble
