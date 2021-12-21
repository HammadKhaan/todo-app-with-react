import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { del, editTodo } from "../Redux/reduxInput";
import EditIcon from "@material-ui/icons/Edit";
import { TextField, Button } from "@material-ui/core";
import { db } from "../Firebase/firebase-config";
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todos({todos,setTodos}) {
  const [isEditing, setIsEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  //let { todos } = useSelector((state) => state.todos);
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const dispatch = useDispatch();

  function handleEditFormSubmit(e) {
    e.preventDefault();
    dispatch(editTodo({ i: isEditing, todo: { title: editingText } }));
    setIsEditing(null);
  }

  function handleEditClick(i) {
    setIsEditing(i);
  }

  const deleteTodo = async(i,id) => {
    dispatch(del({ id: i }));
    const todoDoc = doc(db,"todos",id)
    await deleteDoc(todoDoc)
  };

  useEffect(()=>{
      const getTodos = async() => {
        const data = await getDocs(collection(db,"todos"));
        setTodos(data.docs.map(doc => ({...doc.data(), id:doc.id})));
        console.log(`data.docs`, data.docs)
      }
      getTodos();
  }, [todos]);
console.log(`todos`, todos)
  return (
    <div> 
      {todos.length === 0  ? (<div style={{marginTop:'30px'}}>Loading...</div>) 
      :
      (

        todos.map((todo, i) => {
          return (
            <div className={classes.demo}>
              {isEditing === i ? (
                <>
                  <TextField
                    id="outlined-basic"
                    label="EDIT YOUR TASK"
                    variant="outlined"
                    value={editingText}
                    required
                    onChange={(e) => setEditingText(e.target.value)}
                    style={{ marginRight: "12px", marginTop: "10px" }}
                  />
  
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>handleEditFormSubmit}
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  >
                    UPDATE
                  </Button>
                </>
              ) : (
                <List dense={dense}>
                  <ListItem>
                    <ListItemText
                      primary={todo.title}
                      secondary={secondary ? "Secondary text" : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon onClick={() => handleEditClick(i)} />
                      </IconButton>
  
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => deleteTodo(i,todo.id)} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              )}
            </div>
          );
        })
      )
    
    }
    </div>
  );
}
