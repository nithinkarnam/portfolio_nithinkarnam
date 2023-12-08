import React, { Component } from "react";
import webprogwithhtmlcssjs from './proghtmlcssjs.png';
import sql from './sqlhr.png';
import pythonevery from './pythonevery.png';
import dsainc from './dsainc.png';
import cppiitb from './cppiitbombay.png';
import MERNSTACK from './dsainc.png';

class Certificates extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="mt-3 mb-3">Certificates</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        <div className="col">
                            <div className="card">
                                <img src={webprogwithhtmlcssjs} alt="pic" className="img-top img-fluid" />
                                <div className="card-body">
                                    <h3 className="card-title mt-1">Programming Foundations with JavaScript, HTML and CSS-Duke University</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={MERNSTACK} alt="pic" className="img-top img-fluid" />
                                <div className="card-body">
                                    <h3 className="card-title">MERN STACK</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={sql} alt="pic" className="img-top img-fluid" />
                                <div className="card-body">
                                    <h3 className="card-title">SQL (Intermediate) Certificate</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pythonevery} alt="pic" className="img-top img-fluid" />
                                <div className="card-body">
                                    <h3 className="card-title">Programming for Everybody (Getting Started with Python)-University Of Michigan</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={dsainc} alt="pic" className="img-top img-fluid" />
                                <div className="card-body">
                                    <h3 className="card-title">Data Structures in C</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={cppiitb} alt="pic" className="img-top img-fluid" />
                                <div className="card-body">
                                    <h3 className="card-title mt-1">Advanced Cpp Training</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificates;
