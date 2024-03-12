import './project.css'

export default function Projects(props) {
    return (
        <div className="card col-lg-4 col-md-4 col-sm-12" style={{width:18 + "rem"}}>
            <img src={props.img} className="card-img-top" alt="Afghan Association of london's website" />
            <div className="card-body">
                <h5>{props.title}</h5>
                <p>Developed and designed an interactive web application that is an all-inclusive platform used for various purposes. It has many useful functions. The referral page is one of the most useful features as it allows other agencies and local government to refer their clients directly. </p>
                <a href="https://afghanassociationlondon.org.uk/" target="_blank" className="contact-email-button">Learn More</a>
            </div>
        </div>
    )
}