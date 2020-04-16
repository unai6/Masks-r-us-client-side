import React from "react";
// import '../CSS/carousel.css'
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import ApiService from "../lib/service.js";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function anyName() {
      await ApiService.get_products().then((apiResponse) => {
        //console.log(typeof apiResponse);
        if (apiResponse.data.length) {
          // console.log(apiResponse.data);
          setData(apiResponse.data);
        }
      });
      // console.log(props);
      setIsLoading(false);
    }
    anyName();
  }, []);

  const maskList = data.map((mask) => {
    return mask;
  });
  console.log(maskList);

  return (
    <div>
      <div className='text-dark turquoise-bg h-25 text-center'><b>CoVid-19:</b><br/>Please use only face masks tagged as <u><b>medical</b></u></div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide d-flex"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://ae01.alicdn.com/kf/Hc32e6c42971a45609dcf8cd083ba3b404/7pcs-Organic-Vapor-Full-Face-Respirator-Mask-Gas-Mask-Paint-Pesticide-Chemical-Formaldehyde-Anti-Virus-Respiratory.jpg"
              alt="First slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">MASK-NAME</h5>
              <p className="carousel-R-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                dolore. Ducimus consequuntur,
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://ae01.alicdn.com/kf/H1e8b1309bf3b418ba9d3eb366fbdec159/3600-Half-Face-Gas-Mask-Particulate-Respirator-with-Filter-Cartridge-Protective-Mask-Personal-Protective-Equippment-dust.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">MASK-NAME</h5>
              <p className="carousel-R-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                dolore. Ducimus consequuntur, cum ex illum blanditiis dolor
                distinctio dignissimos
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://ae01.alicdn.com/kf/H2ae29a535056477f985635b3ce36ff304/Unsex-Masks-Antidust-Mouth-Face-Mask-Muzzle-Pm2-5-Antibacterial-Outdoor-Trip-Protection-Mouth-Mask-Mascarillas.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">MASK-NAME</h5>
              <p className="carousel-R-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                dolore. Ducimus consequuntur,
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
