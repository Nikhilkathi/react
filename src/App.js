import React from 'react'
import Navbar from './Navbar/navbar'
import ContactApp from './ContactApp/ContactApp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = ()=>{
  return (<Router>
      <Switch>
        <Navbar/>
        <Route path="/contact" component={<ContactApp/>}/>
      </Switch>
    </Router>)
}
export default App