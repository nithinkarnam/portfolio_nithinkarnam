import { Component } from "react";
import fertilizer_forcasting from './internshipgy.png';
import artgallery from './artgallery.png';
import fertilizerforecast from './fertilizerforecast.png';
import destidive from './destidive.png';
import agecalculator from './agecalculator.png';
import tdetec from './tigerdetec.png';
import custchurn from './custcurnprj.png';
import transactionanalysis from './transactionanalysis.png';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="mt-3">Experiences and Projects</h1>
                    <h3 className="mt-5 mb-3">Experiences</h3>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={fertilizer_forcasting} className="img-fluid rounded-start" alt="Interfacepicture" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                   <h3 className="card-title">Data Science Intern at <a href='https://www.goyaana.com/landing' target="_blank" rel="noopener noreferrer">Goyaana</a></h3>
                                   <ul>
                                       <li>Performed SQL operations on data hosted in Azure servers using SQL Workbench, querying and extracting valuable customer data.</li>
                                       <li>Established seamless connections between SQL databases and Python through MySQL connector to implement data analytics and machine learning models.</li>
                                       <li>Analyzed customer travel data, extracting insights from user ratings to enhance the platform’s user experience.</li>
                                       <li>Created insightful visualizations and applied machine learning techniques to predict customer preferences, enabling data-driven decision-making.</li>
                                       <li>Contributed to developing models and analytics that supported organizational strategies and improved overall customer engagement.</li>
                                   </ul>
                                   <a className="text-decoration-none text-primary" href="https://drive.google.com/file/d/1bneVb7ELV89N1sf4ArZJ5l89sVdKUjgI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="mt-5 mb-3">Projects</h3>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-10">
                                <div className="card-image-top text-center"><img style={{ height: "10rem" }} className="img-fluid" src={artgallery} alt="Art Gallery" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Art Gallery (Using MERN)</h3>
                                    <a className="text-decoration-none text-primary" href="https://github.com/nithinkarnam/art_gallery_frontend" target="_blank" rel="noopener noreferrer">Git repository Link</a>
                                    &ensp; &ensp;
                                    <a className="text-decoration-none text-primary" href="https://artfolio-eight.vercel.app/" target="_blank" rel="noopener noreferrer">Website Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-10">
                                <div className="card-image-top text-center"><img style={{ height: "10rem" }} className="img-fluid" src={custchurn} alt="Customer Churn Prediction" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Advancing Customer Churn Prediction through Hybrid Deep Learning Architectures</h3>
                                    <a className="text-decoration-none text-primary" href="https://github.com/nithinkarnam/customer-churn-prediction-using-a-novel-approach" target="_blank" rel="noopener noreferrer">Git repository Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-10">
                                <div className="card-image-top text-center"><img style={{ height: "10rem" }} className="img-fluid" src={fertilizerforecast} alt="Fertilizer Forecast" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Fertilizer Forecast Using ML</h3>
                                    <a className="text-decoration-none text-primary" href="https://github.com/nithinkarnam/model_prediction-fertilizer" target="_blank" rel="noopener noreferrer">Git repository Link</a>
                                    &ensp; &ensp;
                                    <a className="text-decoration-none text-primary" href="https://nithinkarnam-model-prediction-fertilizer-app-dkrlhs.streamlit.app/" target="_blank" rel="noopener noreferrer">Website Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-10">
                                <div className="card-image-top text-center"><img style={{ height: "10rem" }} className="img-fluid" src={tdetec} alt="Tiger Detection" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Tiger Detection and Classification using Transfer Learning</h3>
                                    <a className="text-decoration-none text-primary" href="https://github.com/nithinkarnam/tigerdetectiondlresnet" target="_blank" rel="noopener noreferrer">Git repository Link</a>
                                    &ensp; &ensp;
                                    <a className="text-decoration-none text-primary" href="#" target="_blank" rel="noopener noreferrer">Website Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-10">
                                <div className="card-image-top text-center"><img style={{ height: "10rem" }} className="img-fluid" src={transactionanalysis} alt="Transaction Analysis" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Power BI Transaction Analysis Dashboard</h3>
                                    <a className="text-decoration-none text-primary" href="https://github.com/nithinkarnam/Power-BI-Transaction-Analysis-Dashboard" target="_blank" rel="noopener noreferrer">Git repository Link</a>
                                    &ensp; &ensp;
                                    <a className="text-decoration-none text-primary" href="https://github.com/nithinkarnam/Power-BI-Transaction-Analysis-Dashboard" target="_blank" rel="noopener noreferrer">Website Link</a>
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
