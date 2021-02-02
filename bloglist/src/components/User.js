import React from 'react'
import { Table } from 'react-bootstrap'

const User = ({ user }) => {
    if(!user){
        return null
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <strong>added blogs</strong>
            <Table striped>
                <tbody>
                    {user.blogit.map(blog =>
                        <tr key={blog.id}>
                            <td>
                                {blog.title}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default User