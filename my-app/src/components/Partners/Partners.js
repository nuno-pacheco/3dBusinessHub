import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Partners.css"

class Partners extends Component{
    render() {
        return (
            <>
            <div className="ourServices">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="services-title">
                            <h1 className="display-4">Our Community</h1>
                            <p className="lead">Partnerships & Clients</p>
                        </div>
                    </div>
                    <div class="carousel-wrapper">
                  <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={1600}
                    >
                  <div>
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634006/3dBusinessHub/Clients%20logos/Img15_xlhdwf.jpg" alt="item"/> 
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634006/3dBusinessHub/Clients%20logos/Img7_phplxi.png" alt="item"/>              
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img14_ghhw1p.png" alt="item"/>
                  </div>
                  <div>
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608648153/3dBusinessHub/Clients%20logos/Img13_eeu8ch.gif" alt="item"/> 
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img11_bjgxb7.png" alt="item"/>              
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img6_euvu8d.png" alt="item"/>
                  </div>
                  <div>
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img9_ozrofg.png" alt="item"/> 
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img12_u5log1.png" alt="item"/>              
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img10_xguqxe.jpg" alt="item"/>
                  </div>
                  <div>
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img8_awlkb2.jpg" alt="item"/> 
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634004/3dBusinessHub/Clients%20logos/Img4_cad7mi.png" alt="item"/>              
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634005/3dBusinessHub/Clients%20logos/Img2_b1b41f.png" alt="item"/>
                  </div>
                  <div>
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634004/3dBusinessHub/Clients%20logos/Img3_cpbsor.png" alt="item"/> 
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634004/3dBusinessHub/Clients%20logos/Img5_xvzpaf.jpg" alt="item"/>              
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1608634004/3dBusinessHub/Clients%20logos/Img1_kiewj2.png" alt="item"/>
                  </div>

                </Carousel>
                </div>
                </div>
                </div>
          </>
        );
      }
    }
  
export default Partners