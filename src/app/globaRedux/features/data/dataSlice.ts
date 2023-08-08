'use client';

import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface dataState{
    getData:string[]; 
}

const initialState: dataState={
    getData:[],
}

const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        getDataHandler(state, action:PayloadAction <any>){
            state.getData=action.payload
            // state.getData.filter((item)=>item._id)
        },
           },
    
})


export const dataActions = dataSlice.actions;
export default dataSlice.reducer;