import auth0 from "auth0-js";
import credentials from "./credentials.json"

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
    cb();
  });
};

const logout = () => {
  tokens = {};
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