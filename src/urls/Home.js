import React from "react";
// import '../CSS/carousel.css'
import { useState, useEffect } from "react";
import ApiService from "../lib/service.js";
import Loader from "react-loader-spinner";

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
              className="d-block w-100 "
              src="https://ae01.alicdn.com/kf/Hc32e6c42971a45609dcf8cd083ba3b404/7pcs-Organic-Vapor-Full-Face-Respirator-Mask-Gas-Mask-Paint-Pesticide-Chemical-Formaldehyde-Anti-Virus-Respiratory.jpg"
              alt="First slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">Mask 9600</h5>
              <p className="carousel-R-text">
              Mascarilla de Gas para pintura facial completa respirador 6800 con cartucho de filtro de carbono máscara protectora completa 6800
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 "
              src="https://ae01.alicdn.com/kf/H1e8b1309bf3b418ba9d3eb366fbdec159/3600-Half-Face-Gas-Mask-Particulate-Respirator-with-Filter-Cartridge-Protective-Mask-Personal-Protective-Equippment-dust.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">Mask 3600</h5>
              <p className="carousel-R-text">
              mascarilla para fumigación máscara de gas protección antipolvo máscara para trabajo de seguridad de spray para soldar de protección contra la contaminación
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 "
              src="https://ae01.alicdn.com/kf/H2ae29a535056477f985635b3ce36ff304/Unsex-Masks-Antidust-Mouth-Face-Mask-Muzzle-Pm2-5-Antibacterial-Outdoor-Trip-Protection-Mouth-Mask-Mascarillas.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">Maskin kn95 plus</h5>
              <p className="carousel-R-text">
              Máscara antipolvo máscara facial no tejida con válvula antipolvo N95 PM 2,5 mascarilla respiradora con válvula
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


      {/* secon carousel */}
      <div className='text-dark turquoise-bg h-50 text-center'><b>TOP Offers</b><br/>Only for the next 24 hours<u><b>Check it!</b></u></div>
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
              className="d-block w-100 "
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpM-aWUFaCYMx4xrlQOHPbOq8kuzFBANRMevj3G1bN05fkDZYGPE3LTpk2HAfgwgg6D5aKv4OiLjsTjpuPmj78HNmlyuejkBhPJ86yS1z7IvQBRVYCiK1V&usqp=CAE"
              alt="First slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">MaskChin 4500</h5>
              <p className="carousel-R-text">
              ;áscara antipolvo máscara facial no tejida con válvula antipolvo N95 PM 2,5 mascarilla respiradora con válvula
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 "
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd8PVAHcpjx4_QXIcskbauh683D0jUbb3ZANsBLNGT3ijkgeVhzaga465lrnRDH8UnBOAEZs9Ug83EU2QZxk3GtgIiEXBedANStHd-Da3k481zllbow1uh&usqp=CAE"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">Antidusty</h5>
              <p className="carousel-R-text">
              Mascarillas N95 máscara con respirador respiración Válvula de kn95 kf95 boca máscara filtro facial enmascarado PM2.5 máscaras ffp1 FFP2 FFP3 KF94 n95 máscara
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 "
              src="https://ae01.alicdn.com/kf/H2ae29a535056477f985635b3ce36ff304/Unsex-Masks-Antidust-Mouth-Face-Mask-Muzzle-Pm2-5-Antibacterial-Outdoor-Trip-Protection-Mouth-Mask-Mascarillas.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h5 className="carousel-R-text">MaskDust</h5>
              <p className="carousel-R-text">
                Máscara especialmente diseñada para transpirar y retener las partículas de polvo.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev "
          href="#secondCarousel"
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
          href="#secondCarousel"
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


      </div>)}


     


    </div>
  );
}

export default Home;
