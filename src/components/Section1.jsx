import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { myArray } from './common/Mapsec';
const Section1 = () => {
    // const [data, setData] = useState(false)
    // function nav() {
    //     setData(!data)
    //     if (data === false) {
    //         document.body.classList.add("overflow-hidden");
    //     }
    //     else {
    //         document.body.classList.remove("overflow-hidden");
    //     }
    // }
    // return (
    //         <div className='overflow-hidden'>
    //             <Navbar>
    //                 <Container>
    //                     <Navbar.Brand className='fs-xl fw-bold text-black' href="#logo">Logo</Navbar.Brand>
    //                     <label className='menu' onClick={nav}>
    //                         <span></span>
    //                         <span></span>
    //                         <span></span>
    //                     </label>
    //                     <Nav className={`d-flex justify-content-center align-items-center justify-content-md-end mobile ${data ? "end-0" : "right-100"}`} >
    //                     <Nav.Link className='fs-lg fw-bold text-black' href="#home" >Home</Nav.Link>
    //                     <Nav.Link className='fs-lg fw-bold text-black' href="#feed">Feed</Nav.Link>
    //                         <Nav.Link className='fs-lg fw-bold text-black' href="#link">User Name</Nav.Link>
    //                     <Nav.Link className='fs-lg fw-bold text-black' href="#link">btn</Nav.Link>
    //                 </Nav>
    //             </Container>
    //         </Navbar>
    //     </div >
    // )
    const [data, setData] = useState(false)
    function nav() {
        setData(!data)
        if (data === false) {
            document.body.classList.add("overflow-hidden");
        }
        else {
            document.body.classList.remove("overflow-hidden");
        }
    }
    return (
        <>
            <div className='overflow-hidden'>
                <Navbar>
                    <Container>
                        <Navbar.Brand className='fs-xl fw-bold text-black' href="#logo">Logo</Navbar.Brand>
                        <label className='menu' onClick={nav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <Nav className={`d-flex justify-content-center align-items-center justify-content-md-end mobile ${data ? "end-0" : "right-100"}`}>
                            <Nav.Link className='fs-lg fw-bold text-black' href="#home" >Home</Nav.Link>
                            <Nav.Link className='fs-lg fw-bold text-black' href="#feed">Feed</Nav.Link>
                            <Nav.Link className='fs-lg fw-bold text-black' href="#link">User Name</Nav.Link>
                            <Nav.Link className='fs-lg fw-bold text-black' href="#link">btn</Nav.Link>
                        </Nav>                                                                      
                    </Container>
                </Navbar>
            </div> 
            {myArray.map((obj, index) => (
                <>                                                                        
                    <div className={`${index === 2 ? "text-brown" : ""}`}>
                        <h1 className={`${obj.color}`}>{obj.name}</h1 >
                        <h2>{obj.age}</h2> 
                        <h3>{obj.hobby}</h3>
                        <p>{obj.section}</p>
                        <p className='fw-bold'>{obj.heading }</p>
                        <h2 className='fw-bold text-pink fs-35'>{obj.topic}</h2>
                        <p>
                            {obj.isLoggedIn} {obj.isLoggedIn === true ? "yes logged in" : ""}
                        </p>
                    </div >
                </>
            ))}
        </ >
    )
}
export default Section1
