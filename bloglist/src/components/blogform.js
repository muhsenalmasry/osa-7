import React from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import {setNotification} from  '../reducers/notificationReducer'
import {Form, Button} from 'react-bootstrap'

const BlogForm = () => {
    const dispatch = useDispatch()

    const addBlog = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        event.target.title.value = ''
        const author = event.target.author.value
        event.target.author.value = ''
        const url = event.target.url.value
        event.target.url.value = ''
        const blog = {
            title: title,
            author: author,
            url: url,
        }
        dispatch(createBlog(blog))
        dispatch(setNotification({success: `a new blog ${blog.title} by ${blog.author} added`, fail: null}, 8000))
    }
    return (
        <div className="formDiv">
            <Form onSubmit={addBlog}>
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="text" id='title' name='title' />
                    <Form.Label>Author:</Form.Label>
                    <Form.Control type="text" id='author' name='author'/>
                    <Form.Label>Url::</Form.Label>
                    <Form.Control type="text" id='url' name='url'/>
                    <Button id="save-button" variant="primary" type="submit">save</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default BlogForm