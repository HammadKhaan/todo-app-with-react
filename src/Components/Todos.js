import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todos() {
  const [isEditing, setIsEditing] = useState(null);
  const [editingText, setEditinngText] = useState("");
  let { todos } = useSelector((state) => state.todos);
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

  const deleteTodo = (i) => {
    dispatch(del({ id: i }));
  };

  return (
    <div>
      {todos.map((todo, i) => {
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
                  onChange={(e) => setEditinngText(e.target.value)}
                  style={{ marginRight: "12px", marginTop: "10px" }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEditFormSubmit}
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
                      <DeleteIcon onClick={() => deleteTodo(i)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            )}
          </div>
        );
      })}
    </div>
  );
}
