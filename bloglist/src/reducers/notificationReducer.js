const notificationReducer = (state = {fail: null, success: null}, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return state = {fail:null, success:null}
        default: return state
    }
}

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: {
                fail: message.fail,
                success: message.success
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'CLEAR_NOTIFICATION'
            })
        }, time)
    }
}

export const clearNotification = () => {
    return async dispatch=> {
        dispatch({
            type: 'CLEAR_NOTIFICATION'
        })
    }
}

export default notificationReducer