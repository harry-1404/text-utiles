import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Upper case click");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Upper case","success");
    }

    const handleLoClick=()=>{
        console.log("Upper case click");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lower case","success");
    }

    const handleOnClick=(event)=>{
        setText(event.target.value)
        console.log("On change")
    }
    
    const [text, setText]= useState('Enter the text');
    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>

            <div>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
            </div>
        </div>
    );
}
