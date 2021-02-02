import React from 'react'
import { like } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import Comments from './comments'

const Blog = ({ blog }) => {
    const dispatch = useDispatch()



    return (
        <div>
            <h2>{blog.title}</h2>
            <Table striped>
                <tbody>
                    <tr>
                        <td>
                            {blog.url}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {blog.likes} likes <Button onClick={() => dispatch(like(blog))}>Like</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            added by {blog.user.name}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <strong>comments</strong>
                
                <Comments blog={blog} comments={blog.comments} />
            </div>
        </div>
    )
}
export default Blog