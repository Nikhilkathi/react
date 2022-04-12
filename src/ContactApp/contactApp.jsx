import React, { Component } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'

class ContactApp extends Component {
  constructor(props){
    super(props)
    this.state={conatct:[]}
  }
  componentDidMount(){
    let url ='https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
    Axios.get(url)
    .then((response)=>{
        this.setState({conatct: response.data})
    })
    .catch(()=>{})
  }

  
  
  
  
  render() {
    return <div className="contanier">
            <div className="row">
            <div className="col-md-8">    
                {
                  this.state.conatct.length>0 ? <>< ContactList conatct={this.state.conatct} /></> : null
                }
            </div>
            <div className="col-md-4">
              {
                
              }
            </div>
        </div>
    </div>
  }
}

export default ContactApp