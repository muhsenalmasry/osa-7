import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
    const message = useSelector(state => state.notification.success)
    if (message === null) {
        return null
    }
    return (
        <div className='success'>
            {message}
        </div>
    )
}

export default Notification