import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Redux/reduxInput";
//import firebaseDb from "../Firebase/firebase";
//iimport { doc, setDoc } from "firebase/firestore"; 
import { db } from '../Firebase/firebase-config';
import { collection, addDoc } from 'firebase/firestore';


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
  const taskCollectionRef = collection(db, 'todos')

  const addTodo = async () => {
    setValue("")
    const dbValue = dispatch(add({ title: value }));
    const {title} = dbValue.payload
    await addDoc(taskCollectionRef, { title })
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
