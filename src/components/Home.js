import photo from './photo.jpg'
import './style.css'
import About  from './About'
import Projects  from './Projects'
import Certificates from './Certificates'
import Contact from './Contact'
export function Home(){
    return(
        <div>
            <div class="container">
                <div class="row gy-5 gx-6 mt-2 justify-content-center">  
                    <div class="col-lg-6 col-md-12 mr-5">
                    <div className="card" style={{ backgroundColor: 'lightgoldenrodyellow'}}>
                            <div class="card-img-top text-center"><img src={photo} class="img1" alt='pic' ></img></div>
                            <div class="card-body">
                                <h3 class="card-title" style={{textAlign:"center",fontFamily:"italic",textDecoration:"underline"}}>Karnam Nithin</h3>
                                <p style={{fontFamily:"cursive",textAlign:"center",fontSize:"25px"}}>Web Developer(Mern Stack)</p>
                                <p style={{fontFamily:"cursive",textAlign:"center",fontSize:"25px"}}>Machine learning Engineer</p>
                                <p style={{fontFamily:"cursive",textAlign:"center",fontSize:"25px"}}>Data Analyst(Beginer)</p>
    
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                    <div className="card" style={{ backgroundColor:'lightgoldenrodyellow'}}>
                            <div class="card-body">
                                <h1 class="card-title mt-5" style={{fontFamily:'cursive',fontWeight:"bolder"}}>Hello .....</h1>
                                <h1 class="card-title" style={{fontFamily:'cursive'}}>Here is what I am</h1>
                                <div class="text-center">
    <button style={{ width: "10rem", backgroundColor: 'lightsalmon' }} class="btn btn-lg roundend-3 btn-success mt-5">
        <a href="https://drive.google.com/file/d/1KeYCiqNMginNcYSyKhIkWDs4j4g2qeUe/view?usp=sharing" target="_blank" class="text-decoration-none text-white">Resume</a>
    </button>
</div>

<div class="text-center">
    <button style={{ width: "10rem", backgroundColor: 'lightsalmon'}} class="btn btn-lg roundend-3 btn-success mt-5">
        <a href="https://github.com/nithinkarnam" target="_blank" class="text-decoration-none text-white">Github</a>
    </button>
</div>

<div class="text-center">
    <button style={{ width: "10rem", backgroundColor: 'lightsalmon'}} class="btn btn-lg roundend-3 btn-success mt-5">
        <a href="https://www.linkedin.com/in/karnamnithin/" target="_blank" class="text-decoration-none text-white">LinkedIn</a>
    </button>
    </div>
    <div class="text-center">
    <button style={{ width: "10rem", backgroundColor: 'lightsalmon'}} class="btn btn-lg roundend-3 btn-success mt-5">
        <a href="#" target="_blank" class="text-decoration-none text-white">portfolio</a>
    </button>
    </div>

           </div>
           </div>    
        </div> 
         </div>   
         </div>
            <About/>
            <Projects/>
            <Certificates/>
            <Contact/>
        </div>
    )
}