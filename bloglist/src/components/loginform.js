import React from 'react'
import {useHistory} from 'react-router-dom'
import {login} from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import {Form, Button} from 'react-bootstrap'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const log = (event) => {
        event.preventDefault()
        const username = event.target.username.value
        event.target.username.value = ''
        const password = event.target.password.value
        event.target.password.value = ''
        const user = {
            username,
            password
        }
        dispatch(login(user))
        history.push('/')
    }


    return (
        <div>
            <Form onSubmit={log}>
                <Form.Group>
                    <Form.Label>username:</Form.Label>
                 <Form.Control type="text" id="username" name="username" />
                <Form.Label>password:</Form.Label>
                <Form.Control id="password" name="password" type="password" />
                <Button id="login-button" variant="primary" type="submit">Login</Button>
            </Form.Group>
            </Form>
        </div>
    )
}

export default Login
