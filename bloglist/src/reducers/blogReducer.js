import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_BLOGS':
            window.localStorage.setItem('blogs', JSON.stringify(action.data))
            return action.data
        case 'NEW_BLOG':
            return state.concat(action.data)
        case 'LIKE':
            const id = action.data.id
            const blogToChange = state.find(b=> b.id===id)
            const changedBlog = {...blogToChange, likes: blogToChange.likes+1}
            return state.map(b=> b.id!==id ? b : changedBlog)
        

        case 'DELETE_BLOG':
            const Id = action.data.id
            return state.filter(b=> b.id !== Id)
        default: return state
    }
}

export const createBlog = blog => {
    return async dispatch => {
        const newBlog = await blogService.create(blog)
        dispatch({
            type: 'NEW_BLOG',
            data: newBlog
        })
    }
}

export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INIT_BLOGS',
            data: blogs
        })
    }
}


export const like = (blog) => {
    return async dispatch => {
        const likedBlog = await blogService.update({...blog, likes: blog.likes+1})
        dispatch({
            type: 'LIKE',
            data: likedBlog
        })
    }
}
export const comment = (blog, comment) => {
    return async dispatch => {
        const com = await blogService.comment(blog, comment)
        dispatch({
            type: 'COMMENT',
            data: com
        })
    }
}
export const remove = (blog) => {
    return async dispatch => {
        await blogService.remove(blog.id)
        dispatch({
            type: 'DELETE_BLOG',
            data: blog
        })
    }
}

export default blogReducer