import React from 'react'
import Card from "./Card"
import img1 from "../img/17.jpg"
import img2 from "../img/10.jpg"
import img3 from "../img/9.jpg"
import img4 from "../img/18.jpg"
import img5 from "../img/20.jpg"
import img6 from "../img/10.jpg"
import img7 from "../img/19.jpg"
import img8 from "../img/13.jpg"
import LeftCard from './LeftCard'
import RightCard from './RightCard'


const Home = () => {
    return (
        <React.Fragment>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">

                            <button className="btn btn-danger mr-2">Techonology</button>
                            <button className="btn btn-primary">Tech-Fun</button>
                            <button className="btn btn-success ml-2">Knowlege</button>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">

                            <button className="btn btn-danger mr-2">Techonology</button>
                            <button className="btn btn-primary">Tech-Fun</button>
                            <button className="btn btn-success ml-2">Knowlege</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">

                            <button className="btn btn-danger mr-2">Techonology</button>
                            <button className="btn btn-primary">Tech-Fun</button>
                            <button className="btn btn-success ml-2">Knowlege</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container my-4">
                <div className="row mb-2">

                    <div className="col-md-6">
                        <Card

                            title=" Learn Data Sicence"
                            date="nov 12"
                            text="Data science is an inter-disciplinary field that uses scientific methods"
                            imgsrc={img3}

                        />
                    </div>

                    <div className="col-md-6">
                        <Card

                            title=" Web Development"
                            date="nov 20"
                            text="Data science is an inter-disciplinary field that uses scientific methods"
                            imgsrc={img4}

                        />
                    </div>

                    <div className="col-md-6">
                        <Card

                            title=" Software Development"
                            date="nov 12"
                            text="Data science is an inter-disciplinary field that uses scientific methods"
                            imgsrc={img5}

                        />
                    </div>

                    <div className="col-md-6">
                        <Card

                            title=" Machine Learning"
                            date="nov 15"
                            text="Data science is an inter-disciplinary field that uses scientific methods"
                            imgsrc={img6}

                        />
                    </div>

                </div>
            </div>

            <div className="container my-5">
                <div className="row featurette d-flex justify-content-center align-items-center ">

                    <LeftCard

                        title="First featurette heading."
                        titlesecond="It’ll blow your mind."
                        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                        imgsrc={img7}

                    />

                    <div className="row featurette d-flex justify-content-center align-items-center my-4 m-1">

                        <RightCard
                            title="First featurette heading."
                            titlesecond="It’ll blow your mind."
                            text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                            imgsrc={img7}


                        />
                    </div>

                    <LeftCard

                        title="First featurette heading."
                        titlesecond="It’ll blow your mind."
                        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                        imgsrc={img8}

                    />


                </div>
            </div>



        </React.Fragment>
    )
}

export default Home
