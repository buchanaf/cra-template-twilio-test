import { Switch, Route, Redirect } from 'react-router-dom'
import { PrimaryLayout } from 'shared/layouts'
import { AgentDesktop } from './AgentDesktop'

function Routes() {
  return (
    <Switch>
      <Route path="/agent-desktop">
        <PrimaryLayout>
          <AgentDesktop />
        </PrimaryLayout>
      </Route>
      <Route path="*">
        <Redirect to="/agent-desktop" />
      </Route>
    </Switch>
  )
}

export default Routes
