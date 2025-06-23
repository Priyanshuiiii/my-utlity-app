// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setmode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
   <>
    <Navbar title="TextUtils" About="AboutUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is alert"/>
    <div className="container my-3">
      <TextForm heading="Enter the text below to analyze" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
