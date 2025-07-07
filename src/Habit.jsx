import {useState, useEffect} from "react";

/**
 * TODO:
 * [X] change Date instances to be Timestamps so creating multiple in a day is supported
 * [ ] in handleButtonClick, clear the content in the inputbox, and ensure that clearing it doesn't change the state variables and subsequently change the previous marble content. aka find a way to store down the previous marble in the marble array! and then reset the state variables! and also reset `isShown` to hide the current marble (can change it to be based on whether textInput has content!)
 * [ ] change marble text to only show on hover! and resize to size of marble!
 * [ ] add jar!
 * [ ] add animation of marble into jar! idea: make jar div a grid, if spot isn't taken, drop marble from directly above that spot
 * [ ]
 */

function Habit() {
  const [marbles, setMarbles] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [marble, setMarble] = useState("");
  function handleButtonClick(e) {
    // trying stuff

    // const date = new Date();
    // const todayMarble = Marble(date, textInput);
    // setMarble(todayMarble);

    const userLocale = navigator.language || navigator.userLanguage || "en-US";
    console.log(userLocale);

    setIsShown(true);
    /*
    new Intl.DateTimeFormat("en-IN",
      (options = {
        dateStyle: "long", timeStyle: "long"
      })
    ).format(new Date());
    // "7 July 2025 at 9:56:19 pm IST"
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timezone); // e.g., "America/New_York"
    const userLocale = navigator.language || navigator.userLanguage || 'en-US';
    console.log(userLocale);
    */
    const formatter = new Intl.DateTimeFormat(userLocale, {
      dateStyle: "short",
      timeStyle: "short",
      // weekday: "narrow",
      // hour: "numeric",
      // minute: "numeric",
      // dayPeriod: "short",
      // month: "short",
      // day: "numeric",
      // year: "numeric",
    });

    const today = formatter.format(new Date());
    console.log("today: ", today);

    setTimestamp(today.toLowerCase());
  }

  function handleInputChange(e) {
    setTextInput(e.target.value);
  }
  useEffect(() => {
    console.log("textInput: ", textInput);
  }, [textInput]);

  useEffect(() => {
    console.log("timestamp: ", timestamp);
  }, [timestamp]);

  return (
    <>
      <div className='font-poppins color-X'>
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
            <div className='relative w-20 h-20 bg-no-repeat bg-contain bg-[url(wonky_marble.svg)]'>
              {/* <img
                alt='marble pixel art'
                src='marble.svg'
                className='w-full'
                title='hi'
              /> */}
              <div className='absolute inset-0 flex justify-center items-center text-center'>
                {timestamp} <br /> {textInput}
              </div>
            </div>

            <div className='relative w-50 h-50 bg-no-repeat bg-contain bg-[url(wonky_jar.svg)]'></div>
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
