import React from "react";
import { useState, useEffect } from "react";
import ApiService from "../lib/service.js";
import { needAuth } from "../lib/Auth-provider";
import Loader from "react-loader-spinner";

const Product = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theProduct, setTheProduct] = useState({});
  const [inTheCart, setinTheCart] = useState(false);
  const [theHeart, setTheHeart] = useState(false);

  useEffect(() => {
    async function anyName() {
      await ApiService.get_product_id(props.match.params.id).then(
        (apiResponse) => {
          console.log(apiResponse.data);
          setTheProduct(apiResponse.data);
        }
      );
      if (props.user) {
        await ApiService.get_wishlist(props).then((responseFromAPI) => {
          responseFromAPI.data.includes(props.match.params.id)
            ? setTheHeart(true)
            : setTheHeart(false);
        });
        await ApiService.get_cartlist(props).then((responseFromAPI) => {
          //console.log(responseFromAPI)
          const productsID = responseFromAPI.data.map((prod) => {
            return prod.productId._id;
          });
          console.log(productsID);
          console.log(props.match.params.id);
          productsID.includes(props.match.params.id)
            ? setinTheCart(true)
            : setinTheCart(false);
        });
      }

      setIsLoading(false);
    }
    anyName();
  }, []);

  function heartChange() {
    theHeart
      ? ApiService.removeFromWishlist(props.match.params.id)
      : ApiService.addToWishlist(props.match.params.id);
    setTheHeart(!theHeart);
  }

  function cartChange() {
    inTheCart
      ? ApiService.delete_from_cart(props.match.params.id)
      : ApiService.add_to_cart(props.match.params.id);
    setinTheCart(!inTheCart);
  }

  return (
    <div>
      {isLoading ? (
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <Loader type="Puff" color="#00E2E1" height={300} width={100} />
          </div>
        </div>
      ) : (
        <div className="container product-container mb-4">
          <h1 className="turquoise-color my-1">{theProduct.name}</h1>
          <h2>by {theProduct.brand}</h2>
          <a href="/products">
          <div className="altgreen-color text-left"><i class="fas fa-arrow-left"></i> Back to products</div>
          </a>

          <div className="row">
            <div className="col-md-8">
              <img className="img-fluid w-75" src={theProduct.photo} alt="" />
            </div>

            <div className="col-md-4">
              {props.user ? (
                <div className="my-3 float-right turquoise-color">
                  {theHeart ? (
                    <button
                      onClick={heartChange}
                      class="badge badge-dark heart-button "
                    >
                      In your wishlist
                      <i
                        class="turquoise-color fa fa-heart "
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={heartChange}
                      class="badge badge-dark heart-button "
                    >
                      Add it to your wishlist
                      <i
                        class="turquoise-color fa fa-heart-o"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              ) : (
                <div class="my-3 float-right badge badge-dark">
                  <i class="turquoise-color fa fa-heart-o" aria-hidden="true" />
                  You need to <a href="/login">login</a> to add products to your
                  wishlist.
                </div>
              )}

              <h3 className="my-3">Product Description</h3>
              <p>{theProduct.description}</p>
              <h3 className="my-3">Product Details</h3>
              <ul>
                <li>Material: {theProduct.material}</li>
                <li>Size: {theProduct.size}</li>
                <li>Color: {theProduct.color}</li>
                <li>Stock: {theProduct.stock}</li>
                <li>Shipping Time: {theProduct.shippingTime}</li>
              </ul>
            </div>
          </div>
          {theProduct.actualPrice ? (
            <div>
              <strike className="text-danger">
                <h1 className="text-dark d-flex justify-content-center bold">
                  Price:&nbsp; {theProduct.originalPrice} €
                </h1>
              </strike>
              <h1 className="text-dark d-flex justify-content-center bold">
                Offer Price:&nbsp; {theProduct.actualPrice} €
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="text-dark d-flex justify-content-center bold">
                Price: {theProduct.originalPrice} €
              </h1>
            </div>
          )}

          <div>
            {inTheCart ? (
              <div>
                <div className="row mx-auto col-sm-6">
                  <div className="col-3">
                    <button
                      onClick={cartChange}
                      type="button"
                      className="btn btn-danger btn-lg btn-block mb-4"
                    >
                      <i
                        class="text-light fas fa-trash-alt"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="col-9">
                    <a href="/cart">
                      <button className="btn btn-dark btn-lg turquoise-color btn-block mb-4">
                        <i
                          class="text-dark fa turquoise-color fa-shopping-cart"
                          aria-hidden="true"
                        />
                        &nbsp; To your Cart
                      </button>
                    </a>
                  </div>
                </div>
                <a href="/products">
                  <div className="altgreen-color text-center"><i class="fas fa-arrow-left"></i> Back to products</div>
                </a>
              </div>
            ) : (
              <div>
                <button
                  onClick={cartChange}
                  type="button"
                  class="btn turquoise-bg btn-lg btn-block dark-text mb-4"
                >
                  <i
                    class="turquoise-bg dark-text fa fa-shopping-cart mr-3"
                    aria-hidden="true"
                  />
                  Add to Cart
                </button>
                <a href="/products">
                <div className="altgreen-color text-center"><i class="fas fa-arrow-left"></i> Back to products</div>
                </a>
              </div>
            )}
          </div>

          {/* <h3 className="my-4">Related Products</h3>

          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default needAuth(Product);
