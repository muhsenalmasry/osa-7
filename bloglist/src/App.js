import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Alert, Navbar, Nav } from 'react-bootstrap'
import Notification from './components/Notification'
import { logout, initializeUsers } from './reducers/userReducer'
import { initializeBlogs } from './reducers/blogReducer'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'
import User from './components/User'
import Users from './components/Users'
import LoginForm from './components/loginform'
import Blog from './components/Blog'
import Blogs from './components/Blogs'


const App = () => {
  const dispatch = useDispatch()
  const loggedUser = JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
  const users = JSON.parse(window.localStorage.getItem('users'))
  const message = useSelector(state => state.notification)
  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUsers())
  }, [dispatch])

  const blogs = JSON.parse(window.localStorage.getItem('blogs'))

  const match = useRouteMatch('/users/:id')
  const usr = match
    ? users.find(u => u._id === match.params.id)
    : null

  const blogMatch = useRouteMatch('/blogs/:id')
  const blog = blogMatch
    ? blogs.find(b => b.id === blogMatch.params.id)
    : null


  const padding = {
    padding: 5
  }

  return (
    <div className="container">
      {(message &&
        <Alert variant="success">
          <Notification />
        </Alert>
      )}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/blogs">blogs</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/users">users</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {loggedUser
                ? <em>{loggedUser.name} logged in <Button onClick={() => dispatch(logout())}>Logout</Button></em>
                : <Link to="/login">login</Link>
              }

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h2>blog app</h2>

      <Switch>
        <Route path="/blogs/:id">
          <Blog blog={blog} />
        </Route>
        <Route path="/blog">
          <Blogs blogs={blogs} />
        </Route>
        <Route path="/users/:id">
          <User user={usr} />
        </Route>
        <Route path="/users">
          {loggedUser ? <Users users={users} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Blogs blogs={blogs}/>
        </Route>
      </Switch>
    </div>
  )
}



export default App