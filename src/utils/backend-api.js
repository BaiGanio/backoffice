const backendURL = process.env.REACT_APP_BGAPI_URL;

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

function POST(endpoint, body) {
  return window
    .fetch(`${backendURL}${endpoint}`, {
      method: "POST",
      body,
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

export { GET, POST };
