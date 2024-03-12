import './app.css'
import aalWebsitePhoto from '../assets/images/aal.png'
import stroikaPhoto from '../assets/images/stroika.png'
import serenaBank from '../assets/images/sb.png'
import Header from './header/Header'
import About from './about/About'
import Experience from './experience/Experience'
import Projects from './projects/project'
import Contact from './contact/contact'
import NoPage from './NoPage'
import {Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App(){
    const tools = ['HTML','CSS','WordPress'];
    const freeLanceTools = ['Visual Studio', 'React']
    return(
        <BrowserRouter>
            {/* <Header>
            <Header />
            </Header> */}
            <Routes>
                <Route path="SohailReactPortolio/" element={<Header />}>
                    <Route index element={<About />} />
                    <Route path="experience" element={
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
                    } />
                    <Route path='projects' element={
                             <div className="container-fluid margin-top" id="Projects">
                             <h2 className="text-center"><span className="aqua">03.</span> Projects</h2>
                             <div className="row justify-content-center gap-3 mt-5">
                        
                                 <Projects
                                     img = {aalWebsitePhoto}
                                     title="AAL Website"
                                     description="Developed and designed an interactive web application that is an all-inclusive platform used for various purposes. It has many useful functions. The referral page is one of the most useful features as it allows other agencies and local government to refer their clients directly."
                                 />
                                   <Projects
                                     img = {stroikaPhoto}
                                     title="Stroika website"
                                     description="Developed, styled, and deployed an interactive, accessible, and responsive web application for Stroika building services primarily using HTML, CSS, JavaScript, Node.js, Visual Studio code, Git, and GitHub."
                                 />
                                   <Projects
                                     img = {serenaBank}
                                     title="Bank application"
                                     description="For my final year project, I built a cross-platform bank web application to allow users to manage all their online transactions online. For example; create an account, secure login using hash algorithms and Microsoft identity, make a payment, transfer money and many more."
                                 />
                             </div>
                         </div> 
                    } />
                    <Route path='contact' element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
   