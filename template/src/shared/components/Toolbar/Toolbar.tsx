import { Avatar } from '@twilio-paste/core/avatar'
import { useTheme } from '@twilio-paste/theme'
import { Box } from '@twilio-paste/core/box'
import { ProductFlexIcon } from '@twilio-paste/icons/esm/ProductFlexIcon'
import { Text } from '@twilio-paste/core/text'
import { Button } from '@twilio-paste/core/button'
import { ReactComponent as HamburgerIcon } from 'assets/icons/Hamburger.svg'
import { ReactComponent as MicroPhoneIcon } from 'assets/icons/Microphone.svg'

function Toolbar() {
  const theme = useTheme()

  return (
    <Box
      backgroundColor="colorBackgroundPrimaryDarkest"
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX="space50"
      paddingY="space20"
      flexShrink={0}
      borderBottomStyle="solid"
      borderBottomColor="colorBorderLight"
      borderBottomWidth="borderWidth10"
    >
      <Box alignItems="center" display="flex">
        <Button variant="link">
          <HamburgerIcon width="20" height="20" fill="#fff" />
        </Button>
        <Box display="inline-flex" marginLeft="space60">
          <ProductFlexIcon color="colorTextInverse" decorative />
          <Text
            color="colorTextBrandInverse"
            marginLeft="space30"
            as="h1"
            fontWeight="fontWeightLight"
            textTransform="upperCase"
            letterSpacing="3px"
          >
            Twilio Flex
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <MicroPhoneIcon
          height="20"
          width="20"
          color={theme.colors.colorBorderInverse}
          style={{ marginRight: theme.space.space40 }}
        />
        <Avatar size={['sizeIcon20', 'sizeIcon70']} name="Alex Buchanan" />
        <Box marginLeft="space30">
          <Text display="block" color="colorTextInverse" fontWeight="fontWeightBold" as="span">
            Alex Buchanan
          </Text>
          <Text
            display="block"
            color="colorTextInverse"
            fontSize="fontSize10"
            as="span"
            lineHeight="lineHeight10"
          >
            Available | 201d 4h
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Toolbar
