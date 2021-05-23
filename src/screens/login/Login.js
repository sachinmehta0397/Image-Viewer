import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/Header';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    root: {
        padding: 50,
    },
    formInput: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '95%',
        },
    }
});

class Login extends Component {
    render() {
            const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className="bodyContainer">
                <Card className={classes.root} variant='outlined'>
                    <Typography className={classes.title} variant="h5" component="h2">
                        LOGIN
                    </Typography>
                    <form className={classes.formInput} noValidate autoComplete="off">
                        <TextField id="standard-required"  label="Username *"/>
                        <br/>
                        <br/>
                        <TextField id="standard-secondary" label="Password *"/>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary">
                          LOGIN
                        </Button>
                  </form>
                </Card>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Login);