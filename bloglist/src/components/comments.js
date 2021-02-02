import React, {useState} from 'react'
import { ListGroup, Button} from 'react-bootstrap'
import blogService from '../services/blogs'
import {setNotification} from '../reducers/notificationReducer'
import {useDispatch} from 'react-redux'

const Comments = ({ blog, comments }) => {
    const dispatch = useDispatch()
    const [commentsToShow, setCommentsToShow] = useState(comments)
    
    const comment = (event) => {
        event.preventDefault()
        const comment = event.target.comment.value
        event.target.comment.value = ''
        blogService.comment(blog, {"comment":comment})
        setCommentsToShow(commentsToShow.concat(comment))
        dispatch(setNotification(`you commented '${comment}'`, 5000))
    }

    return (
        <div>
            <form onSubmit={comment}>
                <input name="comment" />
                <Button type="submit">add comment</Button>
            </form>
            <ListGroup>
                {commentsToShow.map(comment =>
                    <ListGroup.Item>{comment}</ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}
export default Comments