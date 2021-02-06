import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
    isFormEmpty = () => {
        return true;
    }

    isPasswordValid = () => {

        return true;
    }

    isFormValid = () => {
        return true;
        // if(this.isFormEmpty(this.state)) {
        //     //throw error
        // } else if(!this.isPasswordValid()) {

        // } else {
        //     // form is valid
        //     return true;
        // }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        if (this.isFormValid()) {
            event.preventDefault();
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(createdUser => {
                    console.log(createdUser)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' icon color='green' textAlign='center'>
                        <Icon name='puzzle piece' color='teal' />
                        Register for Chat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name='username'
                                icon='user'
                                iconPosition='left'
                                placehoolder='Username'
                                onChange={this.handleChange}
                                value={username}
                                type='text'
                            />
                            <Form.Input
                                fluid
                                name='email'
                                icon='mail'
                                iconPosition='left'
                                placehoolder='Email Address'
                                onChange={this.handleChange}
                                value={email}
                                type='email'
                            />
                            <Form.Input
                                fluid
                                name='password'
                                icon='lock'
                                iconPosition='left'
                                placehoolder='Password'
                                onChange={this.handleChange}
                                value={password}
                                type='password'
                            />
                            <Form.Input
                                fluid
                                name='passwordConfirmation'
                                icon='repeat'
                                iconPosition='left'
                                placehoolder="Confirm Password"
                                onChange={this.handleChange}
                                value={passwordConfirmation}
                                type='password'
                            />
                            <Button color='teal' fluid size='large'>Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already a user?<Link to='/login'>Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;