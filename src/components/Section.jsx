import { useState } from "react";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function Section() {
    const [data, setData] = useState(true);
    return (
        <div className="pt-5"> 
            {data ? (
                <div>
                    <h2>hello</h2>
                </div>
            ) : (
                <div>
                    <h2>new</h2> <h2>new</h2> <h2>new</h2>
                    <h2>new</h2> <h2>new</h2>
                    <h2>new</h2>
                    <h2>new</h2> <h2>new</h2>
                    <h2>new</h2> <h2>new</h2>
                </div>
            )}
            <Button onClick={() => setData(!data)}>
                {data ? "show more" : "show less"}
            </Button>
        </div>
    );
}

export default Section;
