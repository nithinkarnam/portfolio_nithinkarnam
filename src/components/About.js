import pass_photo from './mypspic.png'
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
                                        Greetings! I'm Nithin, an undergraduate student at Vellore Institute of Technology, Chennai, with a strong foundation in machine learning and a keen interest in advancing my expertise in the field. I possess proficiency in several programming languages, including C, C++, Python, and Java, which allows me to approach complex problems with versatility. Currently, I'm honing my skills in full-stack web development, particularly within the MERN stack, and actively contributing to building dynamic, scalable applications. With a strong aptitude for rapid learning and a passion for leveraging technology to solve real-world problems, I am committed to continuous growth and developing innovative solutions across various domains.
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
                                                <th>Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>B-Tech</td>
                                                <td>Vellore Institue of Technology</td>
                                                <td>Chennai</td>
                                                <td>2021-Present</td>
                                                <td>9.34 CGPA</td>
                                            </tr>
                                            <tr>
                                                <td>Intermediate</td>
                                                <td>Narayana Jr.College</td>
                                                <td>Tirupati</td>
                                                <td>2019-2021</td>
                                                <td>96.6%</td>
                                            </tr>
                                            <tr>
                                                <td>Secondary School</td>
                                                <td>Ratnam High School</td>
                                                <td>Tirupati</td>
                                                <td>2018-2019</td>
                                                <td>10.0 CGPA</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <div className={this.state.isDisplaySkills ? 'dedu' : 'nedu'}>
                                    <table class="mt-5 table table-striped"  >
                                        <tbody>
                                            <tr>
                                                <th>programming languages</th>
                                                <td>C, C++,Python, Java</td>
                                            </tr>
                                            <tr>
                                                <th>Web development</th>
                                                <td>HTML, CSS, Bootstrap, Java Script, React, Mongo,MySQL</td>
                                            </tr>
                                            <tr>
                                                <th>Artificial Intelligence</th>
                                                <td>Machine Learning (Predictive Modeling, Classification, Regression, Ensemble Methods, Model Evaluation), Deep Learning (CNN, RNN, Seq2Seq, Transformers, GANs, Transfer Learning), NLP (Sentiment Analysis, Text Generation, Named Entity Recognition, Language Modeling, Question Answering), Machine Vision (Object Detection, Image Classification, Image Segmentation, OCR, Feature Extraction, Keypoint Detection, Image Enhancement)</td>
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
