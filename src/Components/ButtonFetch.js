import React from 'react';

const button = (props) => (
    <button style={{ padding: '20px', marginTop: '50px', backgroundColor: '#fff', fontSize: '25px', border: '3px solid gray' }} onClick={props.click} > Add a user</button >
)

export default button