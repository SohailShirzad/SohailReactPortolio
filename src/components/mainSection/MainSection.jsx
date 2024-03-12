import myImage from '../../assets/images/passportPhoto.jpg';
export default function MainSection(){
    return(
        <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-10 text-start">
            <p className="aqua">Hi, my name is</p>
            <h1 className="display-1 fw-bolder">Sohail Shirzad</h1>
            <h2>Software Engineer</h2>
            <p>I build web applications that are both exceptional and accessible.</p>
          </div>
      </div>
      <div className="container text-center margin-top" id="About">
        <div className="row align-items-center ">
          <div className="col-lg-7 col-md-7 col-sm-12 text-start">
            <h2><span className="aqua">01.</span> About Me</h2>
            <p>A  results-driven graduate Software Engineer with exceptional problem-solving skills. Have a good understanding of computer science principles and hardware, generating effective algorithms as well as debugging build issues and run-time bugs. Skilled in web development stack including JS, Node.js and MongoDB/SQL. A quick learner with proven ability to collaborate effectively, work with constructive feedback and contribute to development teams to deliver projects on time.</p>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-7">
            <img src={myImage} alt="Sohail Shirzad Image" width="70%" />
          </div>
      </div>
    </div>
    </div>
    )
}