import "./App.css";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [message, setMessage] = useState("");

  function isbirthDayLucky() {
    let sum = 0;
    for (let digit in birthDate) {
      if (digit !== "-") {
        sum += Number(digit);
      }
    }
    if (luckyNumber === "0") setLuckyNumber("1");
    if (sum % Number(luckyNumber) === 0) return true;
    return false;
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    if (isbirthDayLucky()) {
      setMessage("🥳🎉 Yayy!! Your birth date is lucky 🥳🎉");
    } else {
      setMessage(
        "Sorry!☹️ It seems like your birth date is not lucky\nBUT maybe your birth year is!😉"
      );
    }
  }

  return (
    <div className="App">
      <h1>Is Your Birthday Lucky?</h1>
      <p id="privacy-note">
        <span style={{ color: "red" }}>Privacy Note :</span> We are not storing
        your data!
      </p>
      <form onSubmit={formSubmitHandler}>
        <label>Enter Your Birthday</label>
        <input
          type="date"
          required={true}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <label>Enter Your Lucky Number</label>
        <input
          type="number"
          required={true}
          onChange={(e) => setLuckyNumber(e.target.value)}
        />
        <button>Check</button>
      </form>
      <p>{message}</p>
      <Footer />
    </div>
  );
}

export default App;
