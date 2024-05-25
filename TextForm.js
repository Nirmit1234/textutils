import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log("UpperCase was clicked "+ text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.Showalert("Change into Upper Case","success")
    }
    const handleLoClick =() =>{
        console.log("UpperCase was clicked "+ text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.Showalert("Change into Lower Case","success")
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleClear = ()=>{
        console.log("Cleared");
        let a = ' ';
        setText(a);
        props.Showalert("Text Cleared","success")
    }
    const [text,setText] = useState('Enter the text here');
    // text = "new Text"; // Wrong way to change the state
    // setText("new Text");// Correct way to change the state
  return (
    <>
    <div className='container'style={{color:props.mode === 'dark'? 'white' : 'black'}} >
        <h1>{props.headings}</h1>
        <div className ="mb-3">
            <textarea className ="form-control" value = {text} onChange={handleOnChange} id="Textarea" rows="8" style={{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>Clear All</button>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length-1} words and {text.length} characters</p>
        <p> {0.008 * (text.split(" ").length)} Mintues To Read</p>
        <h3> Preview </h3>
        <p>{text.length>0 ? text : "Enter something above in the text to preview it something"}</p>
        
    </div>
    </>
  )
}
