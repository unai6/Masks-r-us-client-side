import React from "react";
import { useState, useEffect } from "react";
import { needAuth } from "../lib/Auth-provider";
import { Link } from "react-router-dom";
import ApiService from "../lib/service.js";
import Loader from "react-loader-spinner";
import Paginator from 'react-hooks-paginator';

const MainList = (props) => {
  const pageLimit = 20;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const[currentData, setCurrentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [wishMasks, setWishMasks] = useState([]);

  useEffect(() => {
    ApiService.get_products().then((apiResponse) => {
      console.log(typeof apiResponse);

      if (apiResponse.data.length) {
        console.log("Algo" + apiResponse);
        setData(apiResponse.data);
      }
    });
    // console.log(props);
    if (props.user) {
      ApiService.get_wishlist(props).then((responseFromAPI) => {
        setWishMasks(responseFromAPI.data);
      });
    }
    setIsLoading(false);
  }, [props]);

  useEffect(() => {
      setCurrentData(data.slice(offset, offset + pageLimit));
      setIsLoading(false)
  }, [offset, data])

  const filteredData = currentData.filter((product) =>
    product.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )
//console.log(data)

  currentData.map((mask) => {
    return wishMasks.includes(mask._id) ? mask.inWishList = true : mask.inWishList = false
  });

  return (
    <div>
      {isLoading ? (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <Loader type="Puff" color="#00E2E1" height={300} width={100} />
          </div>
        </div>
      ) : (
        <div className="my-auto ">
          <form className="">
            <input
              type="text"
              className="input-group searchproduct-form form-control border"
              placeholder="Search for..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="query"
            />
            {/* <span className="input-group-append">
          <button className="btn btn-outline-light border " type="submit">
            <i className="fa fa-search"></i>
          </button>
        </span> */}
          </form>
          <div className="cards-container d-flex row justify-content-center m-3">
            {filteredData
              ? filteredData.map((mask) => {
                  return (
                    
                    <div className="my-3 col-12 col-sm-8 col-md-6 col-lg-3 col-xl-2">
                      <div class="container">
                        <div class="row">
                          <div class="">
                            <div class="card">
                              <img
                                class="card-img"
                                src={mask.photo}
                                alt="Vans"
                              />

                              <div class="card-body">
                                <h4 class="card-title turquoise-color">{mask.name}</h4>
                                <h6 class="card-subtitle mb-2 text-muted">
                                  SKU: {mask._id.substr(-7)}
                                </h6>
                                <p class="card-text">{mask.description}</p>

                                <div class="buy d-flex justify-content-between align-items-center">
                                  <div class="price text-success">
                                    <h5 class="mt-4">{mask.originalPrice}€</h5>
                                  </div>
                                  <div class="d-flex justify-content-end">
                                    {mask.inWishList ? (
                                      <i
                                        className="fa m-3 fa-heart turquoise-color"
                                        aria-hidden="true"
                                      ></i>
                                    ) : (
                                      <i
                                        className="fa m-3 fa-heart-o turquoise-color"
                                        aria-hidden="true"
                                      ></i>
                                    )}

                                    <Link to={`/products/${mask._id}`}>
                                      <button className="btn btn-dark turquoise-color">
                                        <i class="fas turquoise-color fa-info-circle"></i> More
                                        info...
                                      </button>
                                    </Link>
                                  </div>
                                  {/* <Link to={`/products/${mask._id}`}>More info</Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      )}
      
      <Paginator   
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={0}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default needAuth(MainList);
