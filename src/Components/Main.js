import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Todos from "./Todos";
import Input from "./Input";
//import firebaseDb from "../Firebase/firebase";

const useStyles = makeStyles({
  root: {
    marginLeft: "18%",
    marginTop: "15px",
  },
  title: {
    color: "green",
  },
});

export default function Main() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);


  return (
    <Grid container spacing={1} className={classes.root}>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ border: "2px solid black", boxShadow: "10px 10px 3px rgba(200,200,200,0.5)" }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            variant="h4"
            component="h4"
            color="textSecondary"
            gutterBottom
          >
            TODO APP
          </Typography>
          <div>
            <Input />
          </div>
          <div>
            <Todos todos={todos} setTodos={setTodos} />
           
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
