import React, { useEffect, useState } from "react";
import { Card, CardColumns, Button } from "react-bootstrap";

export default function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://bgapi.azurewebsites.net/api/Statistics/Posts")
      .then((res) => res.json())
      .then((data) => {setData(data); console.log(data);})
      .catch(error => {
        //this.setData({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  }, []);
  return (
    <div>
      <h1>Example of React Bootstrap</h1>
      <CardColumns>
        {data.map((entry) => (
        <Card className="m-4" key={entry.id} style={{ width: "20rem" }}>
        <Card.Img variant="top" src={entry.imgUrl} />
        <Card.Body>
            <Card.Title>{entry.title}</Card.Title>
            <Card.Text>{entry.content}</Card.Text>
            <Button variant="primary" href={entry.imgUrl} target="_blank">
                More Info
            </Button>
            </Card.Body>
        </Card>
        ))}
      </CardColumns>
    </div>
  );
}