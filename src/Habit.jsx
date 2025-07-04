import {useState, useEffect} from "react";

function Habit() {
  const [marbles, setMarbles] = useState([]);
  const [textInput, setTextInput] = useState("");

  // const handleChange = (e) => {
  //   setNote(e.target.value);
  //   // console.log(note);
  // };

  function handleButtonClick(e) {
    // trying stuff

    const date = new Date();
    const todayMarble = Marble(date, textInput);
    console.log(todayMarble.date);
  }

  function handleInputChange(e) {
    setTextInput(e.target.value);
  }
  useEffect(() => {
    console.log("NOTE: ", textInput);
  }, [textInput]);
  return (
    <>
      <div>
        <h1>title: habit jars</h1>
        <h2> description: my minimalist productivity tool</h2>
        {/* <Jar text='coding' color='green' /> */}
        <TodayMarble
          note={textInput}
          onKeydown={handle}
          onClick={handleClick}
        />
      </div>
      <div>
        <ul>
          {marbles.map((marble) => (
            <li key={marble.date}>{marble.note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

const Marble = (date, note) => {
  // factory function
  return {
    date,
    note,
  };
};

function TodayMarble({note, handleInputChange, handleButtonClick}) {
  // const [note, setNote] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const date = new Date();
  //   const todayMarble = Marble(date, note);
  //   console.log(todayMarble.date);
  // };

  return (
    <>
      <label>
        test input:
        <input type='text' onChange={handleInputChange} />
      </label>
      <button type='submit' onClick={handleClick}>
        click
      </button>
    </>
  );
}

function Jar({text = "empty jar!"}) {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className='flex'>
        <button onClick={handleButtonClick}>
          add to {text}: {count}
        </button>
      </div>
    </>
  );
}

export default Habit;
