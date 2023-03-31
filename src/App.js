
import { useState } from 'react';
import './App.css';

function App() {

  const[number, setNumber] = useState(0)

  const increase = ()=> {
setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

return (
  <div className ="App">
   <div className ="barder-2 border-black border-solid w-[70%] mx-auto mt-[200px] rounded-lg">
  <div className="bg-gray-500 px-2 py-5 m-5 rounded-lg">
  <p claaName= "text-white text-3xl font-bold">{number}</p>
  </div>
    <div className="flex justify-evenly p-5">
    <button onClick={increase}
     className="btn btn-circle text-3xl  btn-primary">+</button>
    <button className="btn btn-active btn-primary">Reset</button>
      <button onClick={decrease} 
      className="btn btn-circle text-3xl  btn-primary">-</button>
    </div>
   </div>
  </div>
);
}

export default App;
