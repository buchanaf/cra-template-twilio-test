import { Theme } from '@twilio-paste/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { TaskContextProvider } from 'shared/hooks/useTaskState'

interface ProvidersProps {
  children: React.ReactChild
}

function Providers(props: ProvidersProps) {
  return (
    <Router>
      <Theme.Provider theme="default">
        <TaskContextProvider>{props.children}</TaskContextProvider>
      </Theme.Provider>
    </Router>
  )
}

export default Providers
