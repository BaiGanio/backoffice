import { getUserToken } from "../services/account.service";

const backendURL = `${process.env.REACT_APP_BGAPI_URL}/api`;

function GET(endpoint) {
  return window
    .fetch(`${backendURL}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getUserToken() || undefined}`,
      },
    })
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

function POST(endpoint, body, headers = {}) {
  return window
    .fetch(`${backendURL}${endpoint}`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${getUserToken() || undefined}`,
        ...headers,
      },
    })
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { GET, POST };
