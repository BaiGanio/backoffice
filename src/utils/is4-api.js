const is4URL = process.env.REACT_APP_IS4_URL;

function POST(endpoint, body) {
  return window
    .fetch(`${is4URL}${endpoint}`, {
      method: "POST",
      body,
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

export { POST };
