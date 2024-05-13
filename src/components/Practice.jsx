// import React from 'react'
// import { useState } from 'react';

// function Practice() {

//         const [color, setColor] = useState("google");
//         const handlecolor = (update) =>{
//             setColor(update);

//     }

//     return (
//         <div>
//             <h1 onClick={() => handlecolor('purple')} className={`${setColor === color ? "" : "text-pink"}`}>My favorite color is !{color} </h1>

//         </div>
//     )
// }

// export default Practice
// import React, { useState } from "react";
// const App = () => {
//     const [name, setName] = useState("");
//     // console.log(name);
//     const formSubmit = (e) => {
//         e.preventDefault();
//         console.log(name);
//         setName("");
//     };
//     return (
//         <div className="d-flex justify-content-center align-items-center min-vh-100">
//             <form onSubmit={formSubmit} className="pt-5">
//                 <label>Name</label>
//                 <input
//                     onChange={(e) => setName(e.target.value)}
//                     type="text"
//                     placeholder="name"
//                     value={name}
//                 />
//                 <input type="submit" className="bg-yellow" />
//             </form>
//         </div>
//     );
// };
// export default App;
import React, { useState } from 'react'

function Practice() {
    const [address, setaddress] = useState("")
    const formSubmit = (e) => {
        console.log(address);
        e.preventDefault();
        setaddress("");
    };

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <form onSubmit={formSubmit}>
                <leble>address</leble>
                <input onChange={(p) => setaddress(p.target.value)} type="text" placeholder='address' value={address} />
                <input type="submit" className='bg-yellow' />
            </form>

        </div>
    )
}

export default Practice
