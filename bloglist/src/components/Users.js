import React from 'react'
import { Link } from 'react-router-dom'
import {Table} from 'react-bootstrap'


const Users = ({users}) => (
        <div>
            <h2>Users</h2>
            <Table stripped>
                <tbody>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <strong>blogs created</strong>
                        </td>
                    </tr>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>
                                <Link to={`/users/${user._id}`}>
                                    {user.name}
                                </Link>
                            </td>
                            <td>
                                {user.blogit.length}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
)

export default Users