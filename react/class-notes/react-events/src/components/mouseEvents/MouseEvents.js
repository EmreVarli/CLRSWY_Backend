import { useState } from 'react';
import './styles.css';

const MouseEvents = () => {
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  //click event
  const handleClick = (event) => {
    console.log('event', event);
    console.log('target type', event.target);
  };

  //doubleClick
  function handleDoubleClick(e) {
    console.log('target type', e.target);
    console.log('event id', e.target.id);
    console.log('event', e.target.innerText);
  }

  // mouseMove
  const handleMouseMove = (e) => {
    //console.log(e.pageX);
    //console.log(e.pageY);
    setCoordX(e.pageX);
    setCoordY(e.pageY);
  };

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X</span> and Y
      </p>
      <p>
        <span>{coordX}</span> and {coordY}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
