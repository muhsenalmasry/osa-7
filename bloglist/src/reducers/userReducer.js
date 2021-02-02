import loginService from '../services/login'
import blogService from '../services/blogs'
import userService from '../services/users'

const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'LOGIN':
            window.localStorage.setItem('loggedBlogappUser', JSON.stringify(action.data))
            window.location.reload(true)
            return action.data
        case 'LOGOUT':
            window.localStorage.removeItem('loggedBlogappUser')
            window.location.reload(true)
            return null
        case 'INITIALIZE_USERS':
            window.localStorage.setItem('users', JSON.stringify(action.data))
            return state
        default: return state
    }
}

export const initializeUsers = () => {
    return async dispatch => {
        const users = await userService.getAll()
        dispatch({
            type: 'INITIALIZE_USERS',
            data: users
        })
    }
}
export const login = (user) => {
    return async dispatch => {
        const loggedUser = await loginService.login(user)
        blogService.setToken(loggedUser.token)
        dispatch({
            type: 'LOGIN',
            data: loggedUser
        })
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}


export default userReducer