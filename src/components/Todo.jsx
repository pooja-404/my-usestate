import React, { useState } from 'react'

function Todo() {
    const [address, setaddrees] = useState("");

    const [inputdata, setinputdata] = useState([]);
    function submit(e) {
        e.preventDefault();
        setinputdata([...inputdata, address]);
        setaddrees("");
    }
    const newdata = inputdata.map((pooja, index) => (<div key={index}><p>{pooja}</p></div>))
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 flex-column'>
            <form onSubmit={submit}>
                <leble>address</leble>
                <input onChange={(e) => setaddrees(e.target.value)} type="text" placeholder='address' value={address} />
                <input type="submit" />
            </form>
            {newdata}
        </div>
    )
};
export default Todo
