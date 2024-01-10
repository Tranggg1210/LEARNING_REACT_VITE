import React from 'react';
import { useReducer } from 'react';
import axios from 'axios'

const UseReducer = () => {
    const initialState = {
        loading: true,
        data: [],
        error: null
    }
    const reducer  = (state, action) => {
        switch(action.type)
        {
            case "GET_DATA_REQUES":
                return {
                    ...state,
                    loading: true
                }
                case "GET_DATA_SUCCESS":
                    return {
                        ...state,
                        data: action.data,
                        loading: false
                    }
                case "GET_DATA_ERROR":
                    return {
                        ...state,
                        data: [],
                        error: action.data
                    }
        }
    }
    const getUsers = () => {
        dispatch({type: "GET_DATA_REQUES"})
        setTimeout(async()=> {
           try {
              const res = await axios.get('https://reqres.in/api/users');
              dispatch({
                type:"GET_DATA_SUCCESS",
                data: res
            })
           } catch  {
                dispatch({
                    type:"GET_DATA_ERROR",
                    data: [],
                    error: "error"
                })
           }
        },2000)
    }
    const [data, dispatch] = useReducer(reducer, initialState);
    return (
       <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <button onClick={getUsers}>Click me</button>
        {
            data.loading ? <div>LOADING...</div>:<div>{JSON.stringify(data)}</div>
        }
       </div>
    );
};

export default UseReducer;