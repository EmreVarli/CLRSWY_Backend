import { useState, useEffect, useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const valueRef = useRef(0);
  console.log('valueRef', valueRef)

  const [value, setValue] = useState(0); 
  console.log('value', value);

  const [state, setState] = useState({})

  const myObject = {}

useEffect(() => {
  // console.log(document.querySelector('input'))
  // document.querySelector('input').focus()
  // console.log(inputRef.current)
  inputRef.current.parentNode.style.backgroundColor = 'red';
}, [])

const changeBGColor = () => {
  // const colors = ['orange', 'pink', 'purple', 'red', '#00ff00', 'rgb(150, 150, 150)']
  // const random = Math.floor(Math.random() * 10)
  // divRef.current.style.backgroundColor = colors[random];

  console.log(inputRef.current.value);

  divRef.current.style.backgroundColor = inputRef.current.value;
}

const increase = () => {
  setState({})
  valueRef.current = valueRef.current + 1;
}

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} placeholder="Enter text..."/>
      <button onClick={changeBGColor}>Change BG Color</button>
      <button onClick={increase}>Increase Value</button>
    </div>
  );
};

export default UseRefComponent;
