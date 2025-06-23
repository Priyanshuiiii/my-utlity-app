// import { handle } from 'express/lib/application';
//uncommenting the upper will be give many error
import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick=()=>{
    // console.log('Upper case was clicked: ' + text);
    let newText=text.toUpperCase();
    setText(newText)
  }
   const handleOnChange=(event)=>{
  //   console.log('On change');
    setText(event.target.value);
  }
  const handlelowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleclrclick=()=>{
    setText('');
  }
  const handlecopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText]=useState('');
  // setText('new Text') correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ? `white` : `black`}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? `grey` : `white`, color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleclrclick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? `white` : `black`}} >
      <h2>YOUR TEXT SUMMARY</h2>
      <p>{text.split(" ").length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something above in textbox to preview it here!'}</p>
    </div>
    </>
  )
}
