import {useState} from 'react';
import BoxForm from './components/BoxForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [boxes, setBoxes] = useState([])

  const handleAddBox = (e, color) =>{
    e.preventDefault()
    setBoxes(
      [...boxes, color]
    )
  }
  return (
    <div className="App">
      <BoxForm 
      handleAddBox = {handleAddBox}
      
    />
    <div className="d-flex justify-content-around border p-5">
      {
        boxes.map((color,i) => <div style={{backgroundColor: color, width:"200px", height:"200px"}}> </div>)
      }
  </div>
    </div>
  );
}

export default App;
