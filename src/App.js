import React, { Component } from 'react'
import { BrowserRouter as Router,
         Route,
         Switch

} from 'react-router-dom' 

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Campaign from './components/Campaign'
import Admin from './components/admin/Admin'
import Login from './components/admin/Login'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Header />
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/home/2' component={Home}/>
            <Route exact path='/sobre' component={About}/>
            <Route exact path='/contato' component={Contact}/>
            <Route exact path='/campanhas' component={Campaign}/>
            <Route path='/admin' component={Admin}/>
            <Route exact path='/login' component={Login}/>
            <Route component={NotFound}/>
            <Footer />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App
