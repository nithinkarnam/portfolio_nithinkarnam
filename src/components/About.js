import pass_photo from './pass_photo.png'
import './style.css'
import { Component } from 'react'
class About extends Component{
    constructor(props){
        super(props);
        this.state={isDisplayEduaction:false};
        this.state={isDisplaySkills:false}
    }
    render(){
        return(
            <div>
                <div class="container" >
                    <h1 class="mt-3">About</h1>
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-3 text-center">
                                <img src={pass_photo} style={{maxHeight:"20rem"}} class="ml-1 my-1 img-fluid " alt="pass_phot"></img>
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <h3 class="card-title">Karnam Nithin</h3>
                                    <p >
                                        Greetings! I'm Nithin, currently pursuing my undergraduate studies at Vellore Institute of Technology, Chennai. I possess a solid understanding of machine learning—while I'm not a complete beginner, I'm still on the journey to becoming an expert. My programming skills are well-grounded in languages like C, C++, Python and Java. Presently, I'm actively engaged in web development using the MERN stack. I have a strong inclination and ability for rapid learning.
                                    </p>
                                    <button  style={{width:"10rem",backgroundColor:"white"}} onClick={()=>{this.setState({isDisplaySkills:false,isDisplayEduaction:!this.state.isDisplayEduaction})}}>Education details</button>
                                    <button  style={{width:"10rem",backgroundColor:"white",borderLeft:"none"}} onClick={()=>{this.setState({isDisplaySkills:!this.state.isDisplaySkills,isDisplayEduaction:false})}}>Skills</button>
                                    <div className={this.state.isDisplayEduaction ? 'dedu' : 'nedu'}>
                                    <table class="mt-4 table table-striped"  >
                                        <thead>
                                            <tr>
                                                <th>Education</th>
                                                <th>College</th>
                                                <th>Loaction</th>
                                                <th>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>B-Tech</td>
                                                <td>Vellore Institue of Technology</td>
                                                <td>Chennai</td>
                                                <td>2021-Present</td>
                                            </tr>
                                            <tr>
                                                <td>Intermediate</td>
                                                <td>Narayana Jr.College</td>
                                                <td>Tirupati</td>
                                                <td>2019-2021</td>
                                            </tr>
                                            <tr>
                                                <td>Secondary School</td>
                                                <td>Ratnam High School</td>
                                                <td>Tirupati</td>
                                                <td>2018-2019</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <div className={this.state.isDisplaySkills ? 'dedu' : 'nedu'}>
                                    <table class="mt-5 table table-striped"  >
                                        <tbody>
                                            <tr>
                                                <th>programming languages</th>
                                                <td>C, C++,python, Java</td>
                                            </tr>
                                            <tr>
                                                <th>Web development</th>
                                                <td>HTML, CSS, Bootstrap, Java Script, React, Mongo</td>
                                            </tr>
                                            <tr>
                                                <th>Other Technologies</th>
                                                <td>Machine Learning, MySQL</td>
                                            </tr>
                                            <tr>
                                                <th>Hosting Platforms</th>
                                                <td>Vercel, Github Pages, Render(for backend),Streamlit(for ML apps)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default About;