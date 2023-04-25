/* eslint-disable no-useless-escape */
import "./css/Contribution.css";
import "./Mobile&Tablet-css/TabletContr.css";
import "./Mobile&Tablet-css/MobileContr.css";
import "./js/ScriptOfButtons";
import { useEffect, useState } from "react";

function Contr() {
  const [isShown1, setIsShown_1] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    //setIsShown((current) => !current);

    // 👇️ or simply set it to true
    setIsShown(true);
    setIsShown_1(false);
  };

  const offClick = (Event) => {
    setIsShown(false);
    setIsShown_1(true);
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("Не может быть пустым");
  const [emailDirty, setEmailDirty] = useState(false);

  const [Lastname, setLastname] = useState("");
  const [LastnameDirty, setLastnameDirty] = useState(false);
  const [LastError, setLastError] = useState("Не может быть пустым");

  const [Middlename, setMiddlename] = useState("");
  const [MiddlenameDirty, setMiddlenameDirty] = useState(false);
  const [MiddleError, setLMiddleError] = useState("Не может быть пустым");

  const [money, setMoney] = useState("");
  const [moneyDirty, setMoneyDirty] = useState(false);
  const [moneyError, setMoneyError] = useState("Не может быть пустым");

  const [formValid, setFormValid] = useState(false);

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  const LastHandler = (e) => {
    setLastname(e.target.value);
    if (!e.target.value) {
      setLastError("Не может быть пустым");
    } else {
      setLastError("");
    }
  };

  const middleHandler = (e) => {
    setMiddlename(e.target.value);
    if (!e.target.value) {
      setLMiddleError("Не может быть пустым");
    } else {
      setLMiddleError("");
    }
  };

  const moneyHandler = (e) => {
    setMoney(e.target.value);
    if (!e.target.value) {
      setMoneyError("Не может быть пустым");
    } else {
      setMoneyError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неверный e-mail");
      if (!e.target.value) {
        setEmailError("Не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const BlurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "number":
        setMoneyDirty(true);
        break;
      case "middlename":
        setMiddlenameDirty(true);
        break;
      case "lastname":
        setLastnameDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError || LastError || moneyError || MiddleError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, LastError, moneyError, MiddleError]);

  const textstyle = {
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
    padding: "2px",
    marginBottom: "10px",
  };

  function myFunction() {
    alert("Спасибо большое! Да хранит вас Бог");
  }

  return (
    <div className="Contr">
      <div className="Source">
        <div className="Ocean">
          <div className="Payment">
            <button onClick={handleClick}>
              <span>Банковские карты</span>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleClick}>
              <span>Яндекс деньги</span>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleClick}>
              <span>SberPay</span>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;
            <button onClick={offClick}>
              <span>QR код</span>
            </button>
          </div>
          {isShown && (
            <div className="Data">
              <input
                name="lastname"
                onBlur={(e) => BlurHandler(e)}
                onChange={(e) => LastHandler(e)}
                type="text"
                value={Lastname}
                placeholder="Фамииля*"
                required
              ></input>
              {LastnameDirty && LastError && (
                <div style={textstyle}>{LastError}</div>
              )}
              <input
                name="email"
                type="text"
                placeholder="e-mail*"
                onBlur={(e) => BlurHandler(e)}
                value={email}
                onChange={(e) => emailHandler(e)}
                required
              ></input>
              {emailDirty && emailError && (
                <div style={textstyle}>{emailError}</div>
              )}
              <input
                onBlur={(e) => BlurHandler(e)}
                onChange={(e) => moneyHandler(e)}
                min="1"
                onKeyPress={preventMinus}
                name="number"
                type="number"
                placeholder="Сумма*"
                value={money}
                required
              ></input>
              {moneyDirty && moneyError && (
                <div style={textstyle}>{moneyError}</div>
              )}
              <input type="text" placeholder="Имя"></input>
              <input
                onBlur={(e) => BlurHandler(e)}
                onChange={(e) => middleHandler(e)}
                name="middlename"
                type="text"
                value={Middlename}
                placeholder="Отчество*"
                required
              ></input>
              {MiddlenameDirty && MiddleError && (
                <div style={textstyle}>{MiddleError}</div>
              )}
            </div>
          )}

          {isShown1 && (
            <div className="ImgQR">
              <div className="QRcode"></div>
            </div>
          )}
          <div className="Accept">
            <p>!Деньги не возращаем!</p>
            <button disabled={!formValid} onClick={myFunction}>
              <span>Помочь</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contr;
