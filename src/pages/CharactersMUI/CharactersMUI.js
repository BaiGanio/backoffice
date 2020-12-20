import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function CharactersMUI() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
        .then((res) => res.json())
        .then((data) => {setData(data); console.log(data);})
        .catch(error => {
          //this.setData({ errorMessage: error.toString() });
          console.error('There was an error!', error);
        });
    }, []);

    const useStyles = makeStyles({
        card: {
          maxWidth: 345,
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#fafafa",
        },
        media: {
          height: 300,
        },
      });

    const classes = useStyles();


    return (
      <div>
       <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
            React Material UI Example
        </Typography>
        
        </Container>
        <Grid container spacing={3}>
            {data.map((character) => (
                <Grid item xs={12} sm={3} key={character.id}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media} image={character.img_url} />
                  <CardContent>
                    <Typography color="primary" variant="h5">
                      {character.name}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {character.status}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            </Grid>
      </div>
    );
  }