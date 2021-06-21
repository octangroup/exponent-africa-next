import Logo from "../public/expo.ico"
import Image from 'next/image'

function NavBar() {
    return (
        <>
          <nav className="navbar navbar-inverse">
            <div className="nav container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#"><Image src={Logo} alt="EA logo" width={88} height={82} /></a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-center">
                  <li><a className="active" href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Programs</a></li>
                  <li><a href="#">Gallery</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><button type="button" className="btn btn-md">Contact Us  <span class="glyphicon glyphicon-menu-right"></span>
                   </button></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
}

export default NavBar