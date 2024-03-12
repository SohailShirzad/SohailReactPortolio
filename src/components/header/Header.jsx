import myLogo from '../../assets/images/logo.png'
import myCV from '../../assets/sohailse24.pdf'
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
                <a className="nav-link" href="#About"><span className="cyan">01.</span> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Experience"><span className="aqua">02.</span> Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Projects"><span className="aqua">03.</span> Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact"><span className="aqua">04.</span> Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={myCV} target="_blank"><span className="aqua">05.</span> View Full CV</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}