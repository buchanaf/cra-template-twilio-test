import { Box } from '@twilio-paste/core/box'
import { Text } from '@twilio-paste/core/text'
import { BuiltInIcon } from '@twilio-paste/icons/cjs/BuiltInIcon'
import { Button } from '@twilio-paste/core/button'

function CRMPanel() {
  return (
    <Box
      as="section"
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
        CRM Config
      </Box>
      <Text
        as="strong"
        fontSize="fontSize70"
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight="fontWeightNormal"
        marginBottom="space40"
      >
        No CRM Configured
      </Text>
      <Text as="p" fontSize="fontSize20" color="colorTextInverseWeaker" marginBottom="space40">
        Our docs can help you get started.
      </Text>
      <Box marginBottom="space60">
        <BuiltInIcon decorative={true} size="sizeIcon110" />
      </Box>
      <Button variant="primary">
        <Text
          as="h2"
          fontSize="fontSize20"
          textTransform="uppercase"
          letterSpacing="2px"
          paddingX="space30"
          color="colorTextInverse"
        >
          How to configure
        </Text>
      </Button>
    </Box>
  )
}

export default CRMPanel
