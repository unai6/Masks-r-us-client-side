import React from "react";
import { useState, useEffect } from "react";
import { needAuth } from "../lib/Auth-provider";
import { Link } from "react-router-dom";
import ApiService from "../lib/service.js";
import Loader from "react-loader-spinner";

const MainList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
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
  }, []);

  const filteredData = data.filter((product) =>
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  filteredData.map((mask) => {
    if (wishMasks.includes(mask._id)) {
      mask.inWishList = true;
    } else {
      mask.inWishList = false;
    }
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
        <div className="my-5 my-auto ">
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

          {filteredData
            ? filteredData.map((mask) => {
                return (
                  <Link to={`/products/${mask._id}`} className="card-text-link">
                    <div
                      key={mask._id}
                      className="card border-info mb-1 shadow"
                    >
                      <div className="d-flex card-body">
                        <span className="align-self-center">
                          <img className="list-img" src={mask.photo} alt="" />
                          {mask.actualPrice ? (
                            <div className="text-center">
                              <strike className="text-danger">
                                {mask.originalPrice} €
                              </strike>
                              <div className="badge badge-dark turquoise-color">
                                {mask.actualPrice} €
                              </div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <h2>{mask.originalPrice} €</h2>
                            </div>
                          )}
                        </span>
                        <div>
                          <div className="card-header">
                            <h5 className="text-left turquoise-color ml-2">
                              {mask.name}
                            </h5>
                            <span className="float-right">
                              {mask.inWishList ? (
                                <i
                                  className="fa fa-heart turquoise-color"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-heart-o turquoise-color"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </span>
                          </div>
                          {/* <h5 className="card-title">{mask.name}</h5> */}
                          <p className="card-text">{mask.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            : null}
          {/* <div>{filteredData ? filteredData.map(product => <p>{product.name}</p>) : null}</div> */}
        </div>
      )}
    </div>
  );
};

export default needAuth(MainList);
