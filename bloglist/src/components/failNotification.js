import React from 'react'
import {useSelector} from 'react-redux'

const FailNotification = () => {
    const message = useSelector(state=> state.notification.fail)
    if (message === null) {
        return null
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}

export default FailNotification