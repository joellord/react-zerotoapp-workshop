import auth0 from "auth0-js";
import credentials from "./credentials.json"
import store from "./store";

const Auth0 = new auth0.WebAuth(credentials);

let tokens = {};

const login = () => {
  Auth0.authorize();
};

const handleAuth = (cb) => {
  Auth0.parseHash((err, result) => {
    tokens.accessToken = result.accessToken;
    tokens.idToken = result.idToken;
    tokens.userId = result.idTokenPayload;
    store.updateGlobalState({isLoggedIn: true});
    cb();
  });
};

const logout = () => {
  tokens = {};
  store.updateGlobalState({isLoggedIn: false});
};

const isAuthenticated = () => {
  return !!(tokens.accessToken);
};

export {
  login,
  handleAuth,
  logout,
  isAuthenticated
}