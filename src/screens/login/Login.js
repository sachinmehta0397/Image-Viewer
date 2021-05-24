import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/Header';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';


const username = "123";
const password = "123";

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

    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            incorrectUsernamePassword: "dispNone"
        };
    }

    loginClickHandler = () => {
        this.state.userName === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired:"dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired:"dispNone"});
        if(this.state.userName === username && this.state.password === password){
            this.setState({incorrectUsernamePassword: "dispNone"});
        }else{
            this.setState({incorrectUsernamePassword: "dispBlock"})
        }
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({userName: e.target.value})
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({password: e.target.value})
    }

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
                        <TextField id="standard-required" userName={this.userName} label="Username *" onChange={this.inputUsernameChangeHandler}/>
                        <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        <br/>
                        <TextField id="standard-secondary" password={this.password} label="Password *" onChange={this.inputPasswordChangeHandler} />
                        <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        <br/>                        
                        <FormHelperText className={this.state.incorrectUsernamePassword}><span className="red">Incorrect username and/or password</span></FormHelperText>
                        <br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
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