import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ApiService from "../lib/service.js";
import { needAuth } from "../lib/Auth-provider";
import { Link } from "react-router-dom";

const MainList = (props) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [wishMasks, setWishMasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/products`).then((apiResponse) => {
      setData(apiResponse.data);
    });
    // console.log(props);
    if (props.user) {
      ApiService.get_wishlist(props).then((responseFromAPI) => {
        setWishMasks(responseFromAPI.data);
      });
    }
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
    <div className="my-5 my-auto w-100 d-inline-block">
      <form className=''>
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
                <div key={mask._id} className="card border-info mb-1 shadow">
                  <div className="d-flex card-body">
                    <span className="align-self-center">
                      <img className="list-img" src={mask.photo} alt="" />
                      <div className="align-center">
                        {" "}
                        <span>{mask.originalPrice}</span>€
                      </div>
                    </span>
                    <div>
                      <div className="card-header">
                        <h5 className="text-left turquoise-color ml-2">
                          {mask.name}
                        </h5>
                        <span className="float-right turquoise-color">
                          {mask.inWishList ? (
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          ) : (
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
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
  );
};

export default needAuth(MainList);
