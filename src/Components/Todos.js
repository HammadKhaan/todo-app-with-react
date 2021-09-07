import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { del } from '../Redux/reduxInput';
import EditIcon from '@material-ui/icons/Edit';
import { TextField, Button } from '@material-ui/core';
import Input from './Input'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  // title: {
  //   margin: theme.spacing(4, 0, 2),
  // },
}));



export default function Todos() {


  const { todos } = useSelector(state => state.todos)
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const dispatch = useDispatch()
  const [edit, setEdit] = useState("");

  const deleteTodo = (i) => {
    dispatch(del({ id: i }))
  }
  const editTodo = (i) => {
    if (edit === i) {
      todos.map((todo, i) => {
        return <div className={classes.demo}>
          <List dense={dense} >
            <ListItem>

              <ListItemText
                primary={todo.title}
                secondary={secondary ? 'Secondary text' : null}

              />


              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <EditIcon onClick={() => setEdit(i)} />
                </IconButton>

                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => deleteTodo(i)} />
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>

          </List>
        </div>



      })
    }

  }


  return (
    <div>

      {todos.map((todo, i) => {
        return <div className={classes.demo}>
          <List dense={dense} >
            <ListItem>

              <ListItemText
                primary={todo.title}
                secondary={secondary ? 'Secondary text' : null}

              />


              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <EditIcon onClick={() => setEdit(i)} />
                </IconButton>

                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => deleteTodo(i)} />
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>

          </List>
        </div>



      })}

    </div>

  );

}
