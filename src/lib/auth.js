import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }
  
  signup({ email, password, shippingAddress}) {
   
  
    return this.auth
      .post("/auth/signup", { email, password, shippingAddress })
      .then(({ data }) => data);
  }

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  }

  user() {
    return this.auth.get("/auth/user").then(({ data }) => data);
  }

}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
