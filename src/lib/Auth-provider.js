import React from "react";
import auth from "./auth"; 
import Loader from 'react-loader-spinner'
const { Consumer, Provider } = React.createContext();


const needAuth = (WrappedComponent) => {

  return class extends React.Component {
    
    render() {
      
      return (
        <Consumer>
          {({ login, signup, user,logout, isLoggedin }) => {
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
      .then((user) =>{
      console.log("AuthProvider did Mount")
    // console.log(user)
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      })
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

/*   
    editProfile = (user) => {
      const {email, shippingAddress, password} = user;
      auth
        .editProfile({email, shippingAddress, password})
        .then((user) => {
         console.log('Hola profile')
         this.setState({isLoggedin:true, user})
    })
        .catch((err) => console.log(err));
    }; */
  

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
   
    const { isLoading, isLoggedin, user, editProfile } = this.state;
    const { login, logout, signup } = this;

    return isLoading ? (

      <div><Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}

   /></div>
    ) : (
      <Provider value={{ isLoggedin, user,login, logout, signup }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, needAuth }; 

export default AuthProvider; 
