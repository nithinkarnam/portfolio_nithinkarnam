import { Component } from "react";
import fertilizer_forcasting from './internshipgy.png';
import artgallery from './artgallery.png';
import fertilizerforecast from './fertilizerforecast.png';
import destidive from './destidive.png';
import agecalculator from './agecalculator.png'
import tdetec from './tigerdetec.png'
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
                                    <h3 class="card-title">Machine Learning intern at <a href='https://www.goyaana.com/landing' target="_blank"> Goyaana</a></h3>
                                    <ul>
                                        <li>Established a secure connection to an Azure-hosted MySQL database, effectively querying and extracting intricate JSON data.</li>
                                        <li>Applied Python for comprehensive data analysis, transforming JSON data into CSV and JSON files.</li>
                                        <li>Demonstrated expertise in data visualization using Matplotlib and Seaborn to create insightful plots such as pie charts, correlation matrix heatmaps, and regression plots.</li>
                                        <li>Applied machine learning techniques, including Linear Regression, for predictive modeling, showcasing the ability to train models, generate regression plots, and interpret results effectively.</li>
                                        <li>Utilized Pandas for data preprocessing, including handling missing values and encoding categorical features with LabelEncoder and OneHotEncoder, highlighting strong data manipulation and transformation skills.</li>
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
