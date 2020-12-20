import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


export default function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://bgapi.azurewebsites.net/api/courses")
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
        BGAPI fetch courses
    </Typography>
    
    </Container>
          <Grid container spacing={3}>
        {data.map((course) => (
            <Grid item xs={12} sm={3} key={course.id}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={course.image} />
              <CardContent>
                <Typography color="primary" variant="h5">
                  {course.name}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
 
    </div>
  );

  
}