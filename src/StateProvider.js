import React, {createContext,useContext,useReducer} from "react";

//this is data layer for basket product info 

export const StateContext=createContext();

export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue=()=>useContext(StateContext);