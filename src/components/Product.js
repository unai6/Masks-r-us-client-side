import React from "react";
import { useState, useEffect } from "react";
import ApiService from "../lib/service.js";
import { needAuth } from "../lib/Auth-provider";
import Loader from "react-loader-spinner";

const Product = (props) => {
  let theHeart;
  let theCart;
  const [isLoading, setIsLoading] = useState(true);
  const [theProduct, setTheProduct] = useState({});
  const [theWishlist, setTheWishlist] = useState([]);
  const [theCartlist, setTheCartlist] = useState([]);
  const [update, setUpdate] = useState(false);

  theWishlist.includes(theProduct._id) ? (theHeart = true) : (theHeart = false);
  theCartlist.includes(theProduct._id) ? (theCart = true) : (theCart = false);
  // console.log(theProduct)
  // console.log("Refresh");

  useEffect(() => {
    ApiService.get_product_id(props.match.params.id)
      .then((apiResponse) => {
        setTheProduct(apiResponse.data);
      });
    if (props.user) {
      ApiService.get_wishlist(props).then((responseFromAPI) => {
        if (responseFromAPI !== theWishlist) {
          setTheWishlist(responseFromAPI.data);
          // console.log(responseFromAPI.data);
        }
      });
      ApiService.get_cartlist(props).then((responseFromAPI) => {
        if (responseFromAPI !== theCartlist) {
          const productsID = responseFromAPI.data.map(prod => {
            return prod.productId._id
          })
          setTheCartlist(productsID);
          // console.log(responseFromAPI.data);
        }
      });
    }
    // console.log(props.user.wishList);
    console.log(theCart);

    setIsLoading(false);
  }, []);
  console.log(theCart);

  useEffect(() => {
    if (props.user) {
      ApiService.get_wishlist(props).then((responseFromAPI) => {
        if (responseFromAPI !== theWishlist) {
          setTheWishlist(responseFromAPI.data);
        }
      });
      ApiService.get_cartlist(props).then((responseFromAPI) => {
        if (responseFromAPI !== theCartlist) {
          const productsID = responseFromAPI.data.map(prod => {
            return prod.productId._id
          })
          setTheCartlist(productsID);
          // console.log(responseFromAPI.data);
        }
      });
    }
  }, [update]);

  function heartChange() {
    theHeart
      ? ApiService.removeFromWishlist(props.match.params.id)
      : ApiService.addToWishlist(props.match.params.id);
    theHeart = !theHeart;
    // console.log(theHeart);
    setUpdate(!update);
  }

  // function cartChange() {
  //   theCart
  //     ? ApiService.delete_from_cart(props.match.params.id)
  //     : ApiService.add_to_cart(props.match.params.id);
  //   theCart = !theCart;
  //   console.log(theCart);
  //   setUpdate(!update);
  // }

  function addToCart() {
    ApiService.add_to_cart(props.match.params.id);
    setUpdate(!update);
  }

  function deleteFromCart() {
    ApiService.delete_from_cart(props.match.params.id);
    setUpdate(!update);
  }

  // theWishlist.includes(theProduct._id) ? (theHeart = true) : (theHeart = false);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div className="container">
          <h1 className="turquoise-color my-1">{theProduct.name}</h1>
          <h2>by {theProduct.brand}</h2>

          <div className="row">
            <div className="col-md-8">
              <img className="img-fluid" src={theProduct.photo} alt="" />
            </div>

            <div className="col-md-4">
              {props.user ? (
                <div className="my-3 float-right turquoise-color">
                  {theHeart ? (
                    <button
                      onClick={heartChange}
                      class="badge badge-dark heart-button "
                    >
                      In your wishlist{" "}
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
                      Add it to your wishlist{" "}
                      <i
                        class="turquoise-color fa fa-heart-o"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              ) : (
                <div class="my-3 float-right badge badge-dark">
                  <i class="turquoise-color fa fa-heart-o" aria-hidden="true" />{" "}
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
          <div>
            <h1 className='text-dark d-flex justify-content-center bold'>Price: {theProduct.originalPrice} €</h1>
          </div>

          <div>
            {theCart ? (
              <button
                onClick={deleteFromCart}
                type="button"
                class="btn btn-danger btn-lg btn-block mb-4"
              >
                <i
                  class="text-light fa fa-shopping-cart mr-3"
                  aria-hidden="true"
                />
                 Remove from your cart 
              </button>
            ) : (
              <button
                onClick={addToCart}
                type="button"
                class="btn btn-dark btn-lg btn-block turquoise-color mb-4"
              >
                <i
                  class="turquoise-color fa fa-shopping-cart mr-3"
                  aria-hidden="true"
                />
                Add to Cart
              </button>
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
