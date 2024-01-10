import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/counter';
const Counter = () => {
    const count =  useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const handleDispatch = () => {
        dispatch(increment())
    }
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <h1>Count: {count}</h1>
            <button onClick={handleDispatch}>INCREMENT</button>
        </div>
    );
};

export default Counter;