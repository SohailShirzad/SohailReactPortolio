import myCV from '../../assets/sohailse24.pdf'
export default function Footer(){
    return(
        <footer className="container-fluid footer mt-5">
          <div className="row mt-5">
            <div className="col-12 col-md-6 col-sm-6 text-center"><p>Designed & built by:<br />Sohail Shirzad</p></div>
            <div className="col-12 col-md-6 col-sm-6 text-center">
              <ul className="list-group">
                <li className="list-group-item"><a className="text-light" href="#About">About</a></li>
                <li className="list-group-item"><a className="text-light"  href="#Experience">Experience</a></li>
                <li className="list-group-item"><a className="text-light"  href="#Projects">Projects</a></li>
                <li className="list-group-item"><a className="text-light"  href="#Contact">Contact</a></li>
                <li className="list-group-item"><a className="text-light"  href={myCV} target="_blank">CV</a></li>

              </ul>
              
            </div>
          </div>
        </footer>
    )
}