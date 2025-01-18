import { Component } from "react";
import fertilizer_forcasting from './internshipgy.png';
import artgallery from './artgallery.png';
import fertilizerforecast from './fertilizerforecast.png';
import destidive from './destidive.png';
import agecalculator from './agecalculator.png'
import tdetec from './tigerdetec.png'
import custchurn from './custcurnprj.png'
class Projects extends Component{
    render(){
        return(
            <div>
                <div class="container">
                    <h1 class="mt-3">Experiences and Projects</h1>
                    <h3 class="mt-5 mb-3">Experiences</h3>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={fertilizer_forcasting}  class="img-fluid rounded-start" alt="Interfacepicture"></img>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                   <h3 class="card-title">Data Science Intern at <a href='https://www.goyaana.com/landing' target="_blank"> Goyaana</a></h3>
<ul>
    <li>Performed SQL operations on data hosted in Azure servers using SQL Workbench, querying and extracting valuable customer data.</li>
    <li>Established seamless connections between SQL databases and Python through MySQL connector to implement data analytics and machine learning models.</li>
    <li>Analyzed customer travel data, extracting insights from user ratings to enhance the platform’s user experience.</li>
    <li>Created insightful visualizations and applied machine learning techniques to predict customer preferences, enabling data-driven decision-making.</li>
    <li>Contributed to developing models and analytics that supported organizational strategies and improved overall customer engagement.</li>
</ul>

                                    <a class="text-decoration-none  text-primary" href="https://drive.google.com/file/d/1bneVb7ELV89N1sf4ArZJ5l89sVdKUjgI/view?usp=sharing" target="_blank">View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h3 class="mt-5 mb-3">Projects</h3>
                    <div class="row gy-4">
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center" ><img style={{height:"10rem"}}  class="img-fluid" src={artgallery} alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Art Gallery(Using MERN)</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/nithinkarnam/art_gallery_frontend" target="_blank">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="https://artfolio-eight.vercel.app/" target="_blank">Website Link</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center" ><img style={{height:"10rem"}} class="img-fluid" src={custchurn} alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Advancing Customer Churn Prediction through 
Hybrid Deep Learning Architectures</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/nithinkarnam/customer-churn-prediction-using-a-novel-approach" target="_blank">Git repository Link </a>
                                        &ensp; &ensp;                                    
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center" ><img style={{height:"10rem"}} class="img-fluid" src={fertilizerforecast} alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Fertilizer Forecast Using ML</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/nithinkarnam/model_prediction-fertilizer" target="_blank">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="https://nithinkarnam-model-prediction-fertilizer-app-dkrlhs.streamlit.app/" target="_blank">Website Link</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center"><img style={{height:"10rem"}} class="img-fluid" src={tdetec}  alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Tiger Detection and classification using Transfer Learning</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/nithinkarnam/tigerdetectiondlresnet" target="_blank">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="#" target="_blank">Website Link</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center"><img style={{height:"10rem"}} class="img-fluid" src={destidive}  alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Destidive-Travel Suggestor(Using React)</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/nithinkarnam/destidive_app" target="_blank">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="https://destidive-app.vercel.app/" target="_blank">Website Link</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;
