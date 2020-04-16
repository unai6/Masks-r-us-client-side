import React from 'react'
import '../CSS/carousel.css'
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import ApiService from "../lib/service.js";

function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

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

    } anyName();

  }, []);


  const filteredData = data.filter((product) =>
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  console.log(filteredData)

  return (
     <div>
     <form className="">
              <input
                type="text"
                className="input-group searchproduct-form form-control border"
                placeholder="Search for..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                name="query"
              />
        </form>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Trending Products</h4>
              <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
  
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
  
                {filteredData ? filteredData.map((mask) => {
                  return (
  
                    <div className="carousel-inner">
                      <div className="item carousel-item active">
                        <div className="row">
  
                          <div className="col-sm-3">
                            <div className="thumb-wrapper">
                              <h4>{mask.name}</h4>
                              <p className="item-price"><strike style={{fontSize:'18px', color:'red'}}>{mask.originalPrice} €</strike> <span>{mask.actualPrice} €</span></p>
                              <div className="img-box">
                                <img src={mask.photo} className="img-responsive img-fluid" alt="" />
  
                              </div> 
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                  <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                  <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                  <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                  <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                </ul>
                                <hr style={{ color: '#00E2E1', border: 'solid 1px' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
                  : null}
                <div>
                  <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <footer className="page-footer font-small blue">
  
  
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="masks-r-us-firebaseapp.com/"> Masks'R'us</a>
          </div>
  
        </footer>
  
      </div> 

  
  
  );
}

export default Home;
