import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Redux/reduxInput";

const useStyles = makeStyles({
  title: {
    color: "green",
  },
});

const Input = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const localState = useSelector((state) => state);
  console.log(`localState`, localState);
  const [value, setValue] = useState("");

  const addTodo = () => {
    dispatch(add({ title: value }));
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="ENTER YOUR TASK"
          variant="outlined"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          style={{ marginTop: "8px", marginLeft: "20px" }}
        >
          ADD TASK
        </Button>
      </form>
    </div>
  );
};

export default Input;
