import React from 'react'
import Togglable from './togglable'
import BlogForm from './blogform'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table} from 'react-bootstrap'


const Blogs = () => {
  const blogs = useSelector(state => state.blogs.sort((a, b) => a.likes - b.likes))

  return (
    <div>
      <Togglable buttonLabel="Create">
        <BlogForm />
      </Togglable>
      <Table stripped>
        <tbody>
          {blogs.map(blog =>
            <tr key={blog.id}>
              <td>
                <Link to={`/blogs/${blog.id}`}>
                  {blog.title} {blog.author}
                </Link>
              </td>
            </tr>

          )}
        </tbody>
      </Table>
    </div>


  )
}

export default Blogs
/*const Blog = ({ blog, like, remove }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)
  const user = JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
  const showWhenVisible = {display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const likeBlog = (event) => {
    event.preventDefault()
    like({
      ...blog, likes: blog.likes+1,
    })
  }

  return (
    <div style={blogStyle}>
      <div className="Blog">
        {blog.title} {blog.author} <button onClick={toggleVisibility}>{visible ? 'hide':'show'}</button>
      </div>
      <div style={showWhenVisible} className="testDiv">
        {blog.url}
        <br />Likes {blog.likes} <button id="like" onClick={likeBlog}>like</button>
        <br />{blog.user}
        <br /><button onClick={remove}>remove</button>
      </div>
    </div>
  )
}


export default Blog
*/