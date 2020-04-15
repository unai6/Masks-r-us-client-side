import React from "react";
import auth from "./auth";
import Loader from 'react-loader-spinner'
const { Consumer, Provider } = React.createContext();


const needAuth = (WrappedComponent) => {

  return class extends React.Component {

    render() {

      return (
        <Consumer>
          {({ login, signup, user, logout, isLoggedin }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true };

  componentDidMount() {
    auth
      .user()
      .then((user) => {
        console.log("AuthProvider did Mount")
        // console.log(user)
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      })
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }


  signup = (user) => {
    const { email, password, shippingAddress } = user;

    auth
      .signup({ email, password, shippingAddress })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch((err) => console.log(err)

      );
  };

  login = (user) => {
    const { email, password } = user;

    auth
      .login({ email, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch((err) => console.log(err));
  };

  logout = () => {
    auth
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

  render() {

    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup } = this;

    return isLoading ? (
      <div className="container h-100" >
        <div className="row h-100 justify-content-center align-items-center"
        ><Loader
            type="Puff"
            color="#00E2E1"
            height={300}
            width={100}
          /></div>
      </div>
    ) : (
        <Provider value={{ isLoggedin, user, login, logout, signup }}>
          {this.props.children}
        </Provider>
      );
  }
}

export { Consumer, needAuth };

export default AuthProvider; 
