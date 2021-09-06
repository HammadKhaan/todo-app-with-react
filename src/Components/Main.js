import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Todos from './Todos'
import Input from './Input'

const useStyles = makeStyles({
    root: {
      //  minWidth: 275,
        
        marginLeft: "18%",
        marginTop: "15px"
    },
    
    title: {
        //   fontSize: 14,
        color: "green"
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Main() {
    const classes = useStyles();

    const [input, setInput]= useState("");
    const [todos, setTodos]= useState([]);

    
    return (

        <Grid container spacing={1} className={classes.root}>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} variant="h4" component="h4" color="textSecondary" gutterBottom>
                        TODO APP
                    </Typography>
                    <div>
                        <Input 
                            input={input}
                            setInput={setInput}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    </div>
                    <div>
                        <Todos todos={todos} setTodos={setTodos}/>
                    </div>
                </CardContent>
            </Card>
        </Grid>

    );
}
