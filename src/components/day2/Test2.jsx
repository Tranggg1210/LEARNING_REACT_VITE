import React from 'react';

const Test2 = () => {
    return (
        <div style={
            { width:100 + "vw",
              height:100 + "vh",
              display: "flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
            <div style={{
                width:100, 
                height:100,
                backgroundColor:"red"
                }}>
                a
            </div>
        </div>
    );
};

export default Test2;