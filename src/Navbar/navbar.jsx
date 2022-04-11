import react from 'react'
class Navbar extends react.Component{

    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg ml-auto'>
                        <img className='navbar-brand' style={{height:50,width:50}} src="https://i.pinimg.com/736x/e7/eb/55/e7eb555410e9f4ce1662121349c4084a.jpg"/>
                     <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className='nav-link' href="#">Home</a></li> 
                            <li className='nav-item'><a className='nav-link' href="#">About Us</a></li> 
                            <li className='nav-item'><a className='nav-link' href="#">Services</a></li> 
                            <li className='nav-item'><a className='nav-link' href="#">Contact</a></li> 
                        </ul>
                    </div>
                </nav>
        
    }
}
export default Navbar