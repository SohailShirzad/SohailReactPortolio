import './app.css'
import Header from './header/Header'
import MainSection from './mainSection/MainSection'
import Experience from './experience/Experience'

export default function App(){
    const tools = ['HTML','CSS','WordPress'];
    const freeLanceTools = ['Visual Studio', 'React']
    return(
        <>
        <Header />
        <MainSection />
        <div className="container text-center margin-top" id="Experience">
        <div className="row align-items-center ">
        <div className="col-lg-10 col-md-10 col-sm-12 text-start">
        <h2><span id="Experience">02.</span> Expience</h2>
        <Experience 
            title = "Web Developer @ "
            company = "Afghan Association of London"
            description = "Developed and styled an interactive & accessible web application for the organisation. Collabrated with the orgranisation directors and staff throughout the entire development circle from requirement gathering, designing, developing, testing, and deploying the application."
            toolsUsed = {tools}
        />
             <Experience 
            title = "Web Developer @ "
            company = "Freelance"
            description = "Deliver high-quality, robust web applicatons for diverse array of projects for clients including; Stroika building services, England Taekwondo Academy, and more."
            toolsUsed = {tools.concat(freeLanceTools)} 
        />
             <Experience 
            title = "Web Developer @ "
            company = "Biggleswade Academy"
            description = "Provided exceptional IT support for more than 800 staff and students via phone, email, and face-to-face."
            toolsUsed = {tools}
        />
        </div>
        </div>
        </div>        
        </>
    )
}
