import React from 'react'
import './App.css'
import Admin from './components/admin/Admin'
// import User from './components/user/User'
import {BrowserRouter, Switch, Route, useHistory, useParams} from 'react-router-dom'

import leftNavigation from './components/user/LeftNavigation'
import User from './components/user/User'
import Website from './components/website/Website'


function App(props) {
  
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path={'/admin'} component={Admin}/>
        <Route path={'/user'} component={User}/>
        <Route path={'/'} component={Website}/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;