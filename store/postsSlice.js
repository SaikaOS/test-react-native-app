import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async function (limit, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        if(!response.ok) {
            return rejectWithValue("Error!")
        }
        const data = await response.json()
        return data
    }
)

export const fetchUsers = createAsyncThunk(
    'post/fetchUsers',
    async function (_, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if(!response.ok) {
            return rejectWithValue("Error!")
        }
        const data = await response.json()
        return data
    }
)

const initialState = {
   posts: [],
   users: [],
}

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
          }),
          builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
          })
    }
})

export default postsSlice.reducer 