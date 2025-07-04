import {useState, useEffect} from "react";

/**
 * TODO:
 * - change Date instances to be Timestamps so creating multiple in a day is supported
 * - in handleButtonClick, clear the content in the inputbox, and ensure that clearing it doesn't change the state variables and subsequently change the previous marble content. aka find a way to store down the previous marble in the marble array! and then reset the state variables! and also reset `isShown` to hide the current marble (can change it to be based on whether textInput has content!)
 * - change marble text to only show on hover!
 * - add jar!
 * - add animation of marble into jar!
 */

function Habit() {
  const [marbles, setMarbles] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [date, setDate] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [marble, setMarble] = useState("");
  function handleButtonClick(e) {
    // trying stuff

    // const date = new Date();
    // const todayMarble = Marble(date, textInput);
    // setMarble(todayMarble);
    setIsShown(true);
    const today = new Date();

    setDate(today.toDateString().toLowerCase());
  }

  function handleInputChange(e) {
    setTextInput(e.target.value);
  }
  useEffect(() => {
    console.log("textInput: ", textInput);
  }, [textInput]);

  return (
    <>
      <div>
        <h1>title: habit jars</h1>
        <h2> description: my minimalist productivity tool</h2>
        <TodayBox
          textInput={textInput}
          handleButtonClick={handleButtonClick}
          handleInputChange={handleInputChange}
        />
      </div>
      <div>
        marble section:
        {/* show element on click */}
        {isShown && (
          <div>
            <div className='relative w-50 h-50 bg-no-repeat bg-contain bg-[url(marble.svg)]'>
              {/* <img
                alt='marble pixel art'
                src='marble.svg'
                className='w-full'
                title='hi'
              /> */}
              <div className='absolute inset-0 flex justify-center items-center text-center'>
                {date} <br /> {textInput}
              </div>
            </div>
          </div>
        )}
        <ul>
          {marbles.map((marble) => (
            <li key={marble.date}>{marble.note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

// const Marble = (date, note) => {
//   // factory function
//   return {
//     date,
//     note,
//   };
// };

function TodayBox({textInput, handleInputChange, handleButtonClick}) {
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
        make a note in the input box:
        <input type='text' onChange={handleInputChange} />
      </label>
      <button type='submit' onClick={handleButtonClick}>
        click me to submit your entry.
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
