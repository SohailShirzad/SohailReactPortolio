import myLogo from '../../assets/images/logo.png'
import myCV from '../../assets/sohailse24.pdf'
import { Outlet, Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#"><img className='logo' src={myLogo} alt="Sohail Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/SohailReactPortolio/" className="nav-link" ><span className="aqua">01.</span> About</Link>
              </li>
              <li className="nav-item">
                <Link to="/SohailReactPortolio/experience" className="nav-link" ><span className="aqua">02.</span> Experience</Link>
              </li>
              <li className="nav-item">
                <Link to="/SohailReactPortolio/projects" className="nav-link" ><span className="aqua">03.</span> Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/SohailReactPortolio/contact" className="nav-link" ><span className="aqua">04.</span> Contact</Link>
              </li>
              <li className="nav-item">
                <Link to ="https://github.com/SohailShirzad/" className="nav-link" target="_blank"><span className="aqua">05.</span> GitHub</Link>
              </li>
              <li className="nav-item">
                <Link to ="https://www.linkedin.com/in/sohailshirzad/" className="nav-link" target="_blank"><span className="aqua">06.</span> Linkedin</Link>
              </li>
              <li className="nav-item">
                <Link to ={myCV} className="nav-link" target="_blank"><span className="aqua">07.</span> View Full CV</Link>
              </li>
             
            </ul>

          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}