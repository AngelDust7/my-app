import "./App.css";
import "./Mobile&Tablet-css/TabletApp.css";
import "./Mobile&Tablet-css/MobileApp.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="shark"></div>
        {/* <img
          src={require("../src/images/background.jpg")}
          className="shark"
          alt="logo"
        /> */}

        <div className="Icons">
          {/* <img src={require('../src/images/backgroundFon_darkL.png')} className="shadow wow animate__animated animate__fadeInLeft" alt=''/> */}
          <div className="icon">
            <img src={require("../src/images/icon.jpg")} alt="" />
          </div>
          <div className="icon1">
            {" "}
            <img src={require("../src/images/BLM.jpg")} alt="" />
          </div>
        </div>
        {/* <h1 className="text wow animate__animated animate__fadeInLeft">ФОНД НА ПОМОЩЬ ВЫМИРАЮЩИХ АФРО-АКУЛ</h1> */}
        <p className="text1">
          Афро-акулы подтвергаются многим пыткам со стороны белых акул и людей.
          Только ты можешь помочь остановить это
        </p>
      </header>
    </div>
  );
}

export default App;
