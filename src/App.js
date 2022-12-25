
import { useRef, useState } from 'react';
import './App.css';
import ChatLeft from './components/ChatLeft';
import ChatRight from './components/ChatRight';

function App() {
  const rightMassageRef = useRef();
  const leftMassageRef = useRef();

  const [massage,setMassage] =useState([]);

  const handleInputMassage=(e)=>{
    e.preventDefault();
      const rightMassage = rightMassageRef.current.value;
      const leftMassage = leftMassageRef.current.value;
      rightMassageRef.current.value='';
      leftMassageRef.current.value='';
      
      setMassage([...massage,{
         massageright:rightMassage,
         massageleft:leftMassage,
         
      }])
  }
  return (
    <div className="App">
      <ChatLeft
      leftMassageRef={leftMassageRef}
      handleInputMassage={handleInputMassage}
      massage={massage}
      />
      <ChatRight
       rightMassageRef={rightMassageRef} 
       handleInputMassage={handleInputMassage}
       massage={massage} />
    </div>
  );
}

export default App;
