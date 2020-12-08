import { Box } from '@twilio-paste/core/box'
import { SideNavigation, Toolbar } from 'shared/components'

interface PrimaryLayoutProps {
  children: React.ReactChild
}

function PrimaryLayout(props: PrimaryLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Toolbar />
      <Box display="flex" overflow="scroll" height="100%">
        <SideNavigation />
        <Box as="main" flex="1">
          {props.children}
        </Box>
      </Box>
    </Box>
  )
}

export default PrimaryLayout
