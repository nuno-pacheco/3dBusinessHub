import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonals.css';

class Testimonials extends Component {
  render() {
    return (
        <>
        <div className="ourServices">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="services-title">
                        <h1 className="display-4">Historic</h1>
                        <p className="lead">What people say about us</p>
                    </div>
                </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <div className="myCarousel">
            {/*<h3>Shirley Fultz</h3>
            <h4>Designer</h4>*/}
            <p>
            This office is home to an incredible number of awesome people.
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            {/*<h3>Shirley Fultz</h3>
            <h4>Designer</h4>*/}
            <p>
            I've been running a business for 3 years and we have offices in the UK and Portugal. This is the best place I've worked at. The space is beautiful and community is just awesome! We'll be spending much more time here and really recommend this without any hesitation!
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            {/*<h3>Shirley Fultz</h3>
            <h4>Designer</h4>*/}
            <p>
            Every product or service is a human relationship in itself and at 3D, you´ll find that that is fundamentally truth. With very professional and friendly people, a step into 3D allowed me not only to get my bearings right as I got all the much needed support and guidance. A unique rich environment, where people and businesses can and will flourish!
            </p>
          </div>
        </div>
        <div>
          <div className="myCarousel">
            {/*<h3>Shirley Fultz</h3>
            <h4>Designer</h4>*/}
            <p>
            I have visited 3D multiple times now and I highly recommend it. Its young and entrepreneurial atmosphere, aligned with Lisbon’s innovative spirit, is key for someone who thrives for success. Located in the heart of the city, 3D easily becomes the place to go for those who dream about change. I have met lots of different people there and I’m very grateful for the ideas I was able to discuss. The whole place is very resourceful and definitely stays up to today’s standards in regards to technology, comfort and people. There is always someone ready to help you in case you need it.
            </p>
          </div>
        </div>
      </Carousel>
      </div>
      </div>
      </>
    );
  }
}
export default Testimonials