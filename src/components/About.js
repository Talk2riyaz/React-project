
import React from 'react'
import RightCard from "./RightCard"
import LeftCard from "./LeftCard"
import img1 from "../img/19.jpg"
import img2 from "../img/9.jpg"
import img3 from "../img/13.jpg"

const About = () => {
    return (
        <React.Fragment>

            <div className="container my-5">
                <div className="row featurette d-flex justify-content-center align-items-center ">

                    <LeftCard

                        title="First featurette heading."
                        titlesecond="It’ll blow your mind."
                        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                        imgsrc={img1}

                    />

                    <div className="row featurette d-flex justify-content-center align-items-center my-4 m-1">

                        <RightCard
                            title="First featurette heading."
                            titlesecond="It’ll blow your mind."
                            text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                            imgsrc={img2}

                        />
                    </div>

                    <LeftCard

                        title="First featurette heading."
                        titlesecond="It’ll blow your mind."
                        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                        imgsrc={img3}

                    />


                </div>
            </div>


        </React.Fragment>
    )
}

export default About
