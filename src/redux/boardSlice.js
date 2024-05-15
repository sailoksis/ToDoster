import {createSlice} from "@reduxjs/toolkit"
import data from "../data/data"

const boardSlice = createSlice({
    name:'boards',
    initialState : data.boards ,
    reducers : {
        //reducers here
    }
})

export default boardSlice