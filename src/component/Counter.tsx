import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState<number>(0);

  const handleOperation = (operation: string) => {
    switch (operation) {
      case "increase":
        setNumber((prevNumber) => prevNumber + 1);
        break;
      case "decrease":
        if (number > 0) {
          setNumber((prevNumber) => prevNumber - 1);
        }
        break;
      case "reset":
        setNumber(0);
        break;
      case "plusTen":
        setNumber((prevNumber) => prevNumber + 10);
        break;
      case "minusTen":
        if (number >= 10) {
          setNumber((prevNumber) => prevNumber - 10);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h2>{number}</h2>
      <div className="buttonContainer">
        <button onClick={() => handleOperation("increase")}>+</button>
        <button
          onClick={() => handleOperation("decrease")}
          style={{ backgroundColor: number <= 0 ? "darkgray" : "" }}
        >
          -
        </button>
        <button onClick={() => handleOperation("reset")}>Reset</button>
        <button onClick={() => handleOperation("plusTen")}>+10</button>
        <button
          onClick={() => handleOperation("minusTen")}
          style={{ backgroundColor: number < 10 ? "darkgray" : "" }}
        >
          -10
        </button>
      </div>
    </>
  );
}

export default Counter;
