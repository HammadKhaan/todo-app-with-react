import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles({
    root: {
        //minWidth: 275,
        //textAlign: "center",
        
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        //   fontSize: 14,
        color: "green"
    },
    pos: {
        marginBottom: 12,
    },
});

const Input = ({ input, setInput, todos, setTodos }) => {
    const classes = useStyles();

    const inputChange = (e) => {
        setInput(e.target.value);
    } 
    const add = (e) => {
        e.preventDefault();
        setTodos([...todos, {title:input}])
       // console.log(input);
        setInput("");
    }
    
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="ENTER YOUR TASK" variant="outlined" value={input} required onChange={inputChange}/>
                        <Button variant="contained" color="primary" onClick = {add} style={{marginTop: "8px",marginLeft: "20px"}}>
                            ADD TASK
                        </Button>
                    </form>
        </div>
    )
}

export default Input
