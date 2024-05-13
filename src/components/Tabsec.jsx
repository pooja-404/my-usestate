import React from 'react'
import { useState } from 'react'


function Tabsec() {
    const [active, setActiveTab] = useState("tab1")
    const handleTab1 = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='pb-5'>
            <div className='d-flex gap-4 mt-4'>
                <button onClick={() => handleTab1('tab1')} className={`${active === "tab1" ? "bg-danger" : ""} fw-bold p-3`}>Tab1</button>
                <button onClick={() => handleTab1('tab2')} className={`${active === "tab2" ? "bg-yellow" : ""} fw-bold p-3`}>tab2</button>
                <button onClick={() => handleTab1('tab3')} className={`${active === "tab3" ? "bg-green " : ""} fw-bold p-3`} >tab3</button>
            </div>
            {/* {active === "tab1" && <p>content-1</p>}
            {active === "tab2" && <p>content-2</p>}
            {active === "tab3" && <p>content-3</p>} */}
            {active === "tab1" ? <p><span className='fw-bold bg-yellow'>this is tab 1</span></p> : ""}
            {active === "tab2" ? <p className='fw-bold bg-yellow'>this is tab 2</p> : ""}
            {active === "tab3" ? <p className='fw-bold bg-yellow'>this is tab 3</p> : ""}
            
        </div>
    );
};
export default Tabsec
