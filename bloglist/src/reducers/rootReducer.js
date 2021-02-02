import{combineReducers} from 'redux'
import blogReducer from './blogReducer'
import notificationReducer from './notificationReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    blogs: blogReducer,
    notification: notificationReducer,
    user: userReducer
})

export default rootReducer