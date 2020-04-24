import React from "react";
// import '../CSS/carousel.css'
import { useState, useEffect } from "react";
import ApiService from "../lib/service.js";
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom'

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

{isLoading ? (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <Loader type="Puff" color="#00E2E1" height={300} width={100} />
          </div>
        </div>
      ) : (<div>
 <div className='text-dark turquoise-bg h-25 text-center'><b>CoVid-19:</b><br/>Please use only face masks tagged as <u><b>medical</b></u></div><br/>
   <Link to='/products'><h4 style={{textAlign:'center'}}>Featured Products</h4></Link> 
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
              className="d-block w-100 col-lg-4 mx-auto   "
              src="https://ae01.alicdn.com/kf/Hc32e6c42971a45609dcf8cd083ba3b404/7pcs-Organic-Vapor-Full-Face-Respirator-Mask-Gas-Mask-Paint-Pesticide-Chemical-Formaldehyde-Anti-Virus-Respiratory.jpg"
              alt="First slide"
            />
            <div className="carousel-caption">
            <Link to='products'><h5 className="carousel-R-text">Mask 9600</h5><br/></Link>  
              
              <b><span style={{fontSize:'16px', backgroundColor:'white', borderRadius:'8px'}}>7.60€</span></b>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 col-lg-4 mx-auto  "
              src="https://ae01.alicdn.com/kf/H1e8b1309bf3b418ba9d3eb366fbdec159/3600-Half-Face-Gas-Mask-Particulate-Respirator-with-Filter-Cartridge-Protective-Mask-Personal-Protective-Equippment-dust.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption">
            <Link to='products'><h5 className="carousel-R-text">Mask 3600</h5><br/></Link>
            
              <b><span style={{fontSize:'16px' , backgroundColor:'white', borderRadius:'8px'}}>17.50€</span></b>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 col-lg-4 mx-auto  "
              src="https://ae01.alicdn.com/kf/He989394f739048868b399f8ef130ef281/Star-War-Darth-Vader-Mask-The-Black-Series-Cosplay-Adult-Helmet-Premium-PVC-Helmet-Prop-for.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption">
            <Link to='products'><h5 className="carousel-R-text">Luke's Dad</h5><br/></Link>
              <b><span style={{fontSize:'16px' , backgroundColor:'white', borderRadius:'8px'}}>6.50€</span></b>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev col-lg-3"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon col-lg-3"
            aria-hidden="true"
          ></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a
          className="carousel-control-next col-lg-3"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon col-lg-3"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      {/* secon carousel */}
      <div className='text-dark bg-warning h-50 text-center'><b><h3>TOP Offers</h3></b>Only for the next 24 hours<u><b> Check it!</b></u></div>
      <div
        id="secondCarousel"
        className="carousel slide d-flex"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#secondCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#secondCarousel" data-slide-to="1"></li>
          <li data-target="#secondCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 col-lg-4 mx-auto"
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpM-aWUFaCYMx4xrlQOHPbOq8kuzFBANRMevj3G1bN05fkDZYGPE3LTpk2HAfgwgg6D5aKv4OiLjsTjpuPmj78HNmlyuejkBhPJ86yS1z7IvQBRVYCiK1V&usqp=CAE"
              alt="First slide"
            />
            <div className="carousel-caption">
            <Link to='products'><h5 className="carousel-R-text">MaskChin 4500</h5><br/></Link>
             
              <b><span className='text-success' style={{fontSize:'16px',  backgroundColor:'white', borderRadius:'8px'}}>2.50€</span></b> <b><strike className='text-danger'> 4.50€</strike></b>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 col-lg-4 mx-auto  "
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd8PVAHcpjx4_QXIcskbauh683D0jUbb3ZANsBLNGT3ijkgeVhzaga465lrnRDH8UnBOAEZs9Ug83EU2QZxk3GtgIiEXBedANStHd-Da3k481zllbow1uh&usqp=CAE"
              alt="Second slide"
            />
            <div className="carousel-caption">
            <Link to='products'> <h5 className="carousel-R-text">Antidusty</h5><br/></Link>
              
              <b><span className='text-success' style={{fontSize:'16px',  backgroundColor:'white', borderRadius:'8px'}}> 4.70€</span></b><b><strike className='text-danger'> 9.50€</strike></b>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 col-lg-4 mx-auto  "
              src="https://ae01.alicdn.com/kf/H2ae29a535056477f985635b3ce36ff304/Unsex-Masks-Antidust-Mouth-Face-Mask-Muzzle-Pm2-5-Antibacterial-Outdoor-Trip-Protection-Mouth-Mask-Mascarillas.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption">
            <Link to='products'><h5 className="carousel-R-text">MaskDust</h5><br/></Link>
            
              <b><span  className='text-success' style={{fontSize:'16px',  backgroundColor:'white', borderRadius:'8px'}}>12.50€ </span></b> <b><strike className='text-danger'> 24.50€</strike></b>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev col-lg-3"
          href="#secondCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon col-lg-3"
            aria-hidden="true"
          ></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a
          className="carousel-control-next col-lg-3"
          href="#secondCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon col-lg-3"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      </div>)}


     


    </div>
  );
}

export default Home;
