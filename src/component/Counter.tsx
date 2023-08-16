import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState<number>(0);
  const buttonConfigurations = [
    { label: "+", operation: "increase", disabled: false },
    { label: "-", operation: "decrease", disabled: number <= 0 },
    { label: "Reset", operation: "reset", disabled: false },
    { label: "+10", operation: "plusTen", disabled: false },
    { label: "-10", operation: "minusTen", disabled: number < 10 },
  ];

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
        {buttonConfigurations.map((button) => (
          <button
            key={button.operation}
            onClick={() => handleOperation(button.operation)}
            style={{ backgroundColor: button.disabled ? "darkgray" : "" }}
            disabled={button.disabled}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Counter;
