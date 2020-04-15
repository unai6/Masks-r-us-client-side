import axios from "axios";

class apiService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }
  get_wishlist(props) {
    return this.auth.get(`/user/wishlistid/${props.user._id}`);
  }

  get_wishlist_pop(props) {
    return this.auth.get(`/user/wishlist/${props.user._id}`);
  }


  get_cartlist(props){
    return this.auth.get(`user/cart/${props.user._id}`)
  }

  delete_from_cart(id){
    return this.auth.delete(`products/deletefromcart/${id}`)
  }


  removeFromWishlist(id) {
    return this.auth.post(`/products/removefromwishlist/${id}`)
  }

  addToWishlist(id) {
    return this.auth.post(`/products/addtowishlist/${id}`)
  }

  get_products() {
    return this.auth.get('/products')
  }

  get_product_id(id){
    return this.auth.get(`/products/${id}`)
  }

}

const ApiService = new apiService();
export default ApiService;
