import React from 'react'
import { ListGroup, Button} from 'react-bootstrap'
import blogService from '../services/blogs'

const Comments = ({ blog, comments }) => {

    const comment = (event) => {
        event.preventDefault()
        const comment = event.target.comment.value
        event.target.comment.value = ''
        comments.concat(blogService.comment(blog, {"comment":comment}))
    }

    return (
        <div>
            <form onSubmit={comment}>
                <input name="comment" />
                <Button type="submit">add comment</Button>
            </form>
            <ListGroup>
                {comments.map(comment =>
                    <ListGroup.Item>{comment}</ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}
export default Comments