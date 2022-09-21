import ValidationComp from "./components/Validation";
import CharComp from "./components/Char";
import { useState } from "react";
import './App.css';

function App() {

  const [len, setLen]=useState(0);
  const [textArray, setTextArray] = useState([])
  
  function changed(e){
      const text = e.target.value;
      setTextArray(Array.from(text));
      setLen(text.length);
    }

  function deleteItem(index){
    const arrayClone =  [...textArray];
    arrayClone.splice(index,1);
    setTextArray(arrayClone);
  }

    const letterList = textArray.map((item,index)=>{
      if(item !== " "){
        return(
          <CharComp letter={item} pop={deleteItem} index={index}  />
        )
      }else{
        return null
      }
    });

  return (
    <div className="App">
      <div className="main__area">
        <input type="text" value={textArray.join("")} onChange={changed} />
        <p className="main__p"><i>Text lenght_: </i>{len}</p>
        <ValidationComp len={len}/>
      </div>
      <div className="letters">
        {letterList}
      </div>
    </div>
  );
}

export default App;
