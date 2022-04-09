import react from 'react'
class Navbar extends react.Component{

    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg ml-auto'>
                     <a className='navbar-brand' href="#">Big-Cars</a>
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