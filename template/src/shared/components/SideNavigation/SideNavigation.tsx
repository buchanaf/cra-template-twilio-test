import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from '@twilio-paste/core/box'
import { Anchor } from '@twilio-paste/core/anchor'
import { ReactComponent as AdminIcon } from 'assets/icons/Admin.svg'
import { ReactComponent as AgentDesktopIcon } from 'assets/icons/AgentDesktop.svg'
import { ReactComponent as TeamsIcon } from 'assets/icons/Teams.svg'
import { ReactComponent as QueueStatsIcon } from 'assets/icons/QueueStats.svg'

const navigation = [
  { text: 'Admin', Icon: AdminIcon, to: '/admin' },
  { text: 'Agent Desktop', Icon: AgentDesktopIcon, to: '/agent-desktop' },
  { text: 'Teams', Icon: TeamsIcon, to: '/teams' },
  { text: 'Queue Stats', Icon: QueueStatsIcon, to: '/queue-stats' },
]

function SideNavigation() {
  const history = useHistory()
  const onNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      history.push(e.currentTarget.getAttribute('href')!)
    },
    [history]
  )

  return (
    <Box
      as="aside"
      minWidth="36px"
      minHeight="100%"
      backgroundColor="colorBackgroundDarkest"
      position="sticky"
      top="0"
      borderRightStyle="solid"
      borderRightColor="colorBorderLight"
      borderRightWidth="borderWidth10"
    >
      <Box as="nav" paddingX="space20" display="flex" flexDirection="column">
        {navigation.map(({ to, Icon }) => (
          <Anchor
            padding="space20"
            marginTop="space40"
            key={to}
            display="block"
            href={to}
            onClick={onNavigate}
          >
            <Icon width="24" height="24" color="#fff" />
          </Anchor>
        ))}
      </Box>
    </Box>
  )
}

export default SideNavigation
