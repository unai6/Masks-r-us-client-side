import React, { useEffect, useState } from "react";
import { needAuth } from "../lib/Auth-provider";
import ApiService from "../lib/service.js";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const [cartList, setCartList] = useState([]);
  const [updateState, setUpdateState] = useState(true);

  useEffect(() => {
    //console.log(props)
    ApiService.get_cartlist(props).then((responseFromAPI) => {
      // console.log(responseFromAPI)
      setCartList(responseFromAPI.data);
      //console.log(responseFromAPI.data);
    });
  },[updateState]);

  const delete_from_cart = (id) => {
    ApiService.delete_from_cart(id).then((responseFromAPI) => {
      // console.log(responseFromAPI)

      setUpdateState(!updateState);
    });
  };

  const subTotal = () => {
    //console.log(cartList)

    let theSub = 0;
    for (let i = 0; i < cartList.length; i++) {
      //console.log(Number(cartList[i].productId.originalPrice))
      theSub += Number(
        cartList[i].productId.originalPrice * cartList[i].quantity
      );
    }
    return theSub.toFixed(2);
  };
  /* 
  console.log('este es el subtotal')
  console.log(subTotal()) */
  //console.log(cartList)

  const newQuantity = async (e, id) => {
    // console.log(e.target.value);
    // console.log(id);
    await ApiService.updateQuantity(id, e.target.value)
    setUpdateState(!updateState)
  }

  return (
    <div>
      <div>
    

        <section className="wishtitle jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Your Shopping Cart</h1>
          </div>
        </section>

        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th scope="col" className="text-right">
                        Total
                      </th>

                      <th> </th>
                    </tr>
                  </thead>
                  {cartList.map((productInCart) => {
                    
                    return (
                      <tbody>
                        <tr>
                          <td>
                            <img
                              style={{ height: "40px" }}
                              src={productInCart.productId.photo}
                              alt=""
                            />
                          </td>
                          <td>{productInCart.productId.name}</td>
                          <td>Stock:{productInCart.stock}</td>
                          <td>
                            <input
                            onChange={ (e) => newQuantity(e, productInCart.productId._id)}
                              className="form-control"
                              type="number"
                              defaultValue= {productInCart.quantity}
                            />
                          </td>
                          <td className="text-right">
                            {productInCart.productId.originalPrice} €
                          </td>
                          <td className="text-right">
                            {(productInCart.productId.originalPrice * productInCart.quantity*1).toFixed(2)}
                            €
                          </td>
                      
                          <td className="text-right">
                            <button
                              onClick={() =>
                                delete_from_cart(productInCart.productId._id)
                              }
                              className="btn btn-sm btn-danger"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                  <tr>
                    <td> Subtotal:</td>
                    <td className="text-right"> {subTotal()}€</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Shipping</td>
                    <td className="text-right">6.90 €</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total: </strong>
                    </td>
                    <td className="text-right">
                      <strong>
                        
                        {Number(subTotal() * 1 + 6.9).toFixed(2)}€
                      </strong>
                    </td>
                  </tr>
                </table>

                <div className="col mb-2">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 text-right">
                      <button className="btn btn-lg btn-block  text-uppercase turquoise-bg text-light">
                        Checkout
                      </button>
                    </div>
                    <div className="col-sm-12  col-md-6">
                      <Link
                        to="/products"
                        className="btn  btn-block  text-uppercase btn-outline-warning mt-3"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <footer className="text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-lg-4 col-xl-3">
                    <h5 className= 'text-center d-block'>About</h5>
                    <hr className="bg-dark mb-2 mt-0 d-block mx-auto w-25" />
                    <p style={{ color: "black" }} className="mb-0">
                      Here you will find the best customer service Ever. Trust
                      us and you will not regret it.
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                    <h5 className= 'text-center d-block'>Others links</h5>
                    <hr className="bg-dark mb-2 mt-0 d-block mx-auto w-25" />
                    <ul  style={{ color: "black" }} className="list-unstyled text-center d-block">
                      <li>About us</li>
                      <li>FAQ</li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3">
                    <h5 className= 'text-center d-block'>Contact</h5>
                    <hr className="bg-dark mb-2 mt-0 d-block mx-auto w-25" />
                    <ul style={{ color: "black" }} className="list-unstyled text-center d-block">
                      <li>
                        <i className="fa fa-home mr-2"></i> Mask 'R' us
                      </li>
                      <li>
                        <i className="fa fa-envelope mr-2"></i>
                        maskrus@gmail.com
                      </li>
                      <li>
                        <i className="fa fa-phone mr-2"></i> + 93 230 02 21
                      </li>
                      <li>
                        <i className="fa fa-print mr-2"></i> + 669 12 12 43
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 copyright mt-3">
                    <p className="float-left">
                      <a href="#">Back to top</a>
                    </p>
                  </div>
                </div>
              </div>
            </footer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default needAuth(Cart);
