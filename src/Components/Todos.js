import React from 'react'
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




export default function Todos({todos, setTodos}) {

    
      const classes = useStyles();
      const [dense, setDense] = React.useState(false);
      const [secondary, setSecondary] = React.useState(false);


    return (
        <div>
            
                {todos.map((todo)=>{
                    <li>
                        {console.log(todo.title)}
                        <input type="text" value={todo.title} onChange= {(e)=>e.preventDefault()}/> 
                        {todo.title}
                        
                    </li>
                })}
                              
        </div>
    
    );

            }
