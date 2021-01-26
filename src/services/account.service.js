import * as is4API from "../utils/is4-api";

const USER_AUTH_TOKEN = "user_auth_token";
const CLIENT_AUTH_TOKEN = "client_auth_token";

function getDataFromToken() {
  const token = getUserToken();
  if (token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } else {
    return null;
  }
}

function getUserToken() {
  return window.localStorage.getItem(USER_AUTH_TOKEN) || null;
}

function getClientToken() {
  return window.localStorage.getItem(CLIENT_AUTH_TOKEN) || null;
}

function logoutUser() {
  window.localStorage.removeItem(USER_AUTH_TOKEN);
}

function requestClientToken() {
  const formData = new URLSearchParams();
  formData.set("client_id", process.env.REACT_APP_IS4_CLIENT);
  formData.set("client_secret", process.env.REACT_APP_IS4_CLIENT_SECRET);
  formData.set("scope", process.env.REACT_APP_IS4_SCOPE);
  formData.set("grant_type", "client_credentials");

  return is4API.POST("/connect/token", formData);
}

function saveClientToken(token) {
  window.localStorage.setItem(CLIENT_AUTH_TOKEN, token);
}

function requestUserToken({ username, password }) {
  const formData = new URLSearchParams();
  formData.set("client_id", process.env.REACT_APP_IS4_USER);
  formData.set("client_secret", process.env.REACT_APP_IS4_USER_SECRET);
  formData.set("scope", process.env.REACT_APP_IS4_SCOPE);
  formData.set("grant_type", "password");
  formData.set("username", username);
  formData.set("password", password);

  return is4API.POST("/connect/token", formData);
}

function saveUserToken(token) {
  window.localStorage.setItem(USER_AUTH_TOKEN, token);
}

export {
  requestClientToken,
  requestUserToken,
  getUserToken,
  getClientToken,
  saveUserToken,
  saveClientToken,
  getDataFromToken,
  logoutUser,
};
