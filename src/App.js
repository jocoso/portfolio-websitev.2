import MenuWindow from "./components/menuWindow";
import './App.css';

import img from "./images/joshpixel.gif"


function App() {
  return (
    <div className="outer">
      <div id="char-rec">
        <h1>Joshua Collado</h1>
        <hr className="classy-line" />
        <img src={img} />
      </div>
      <MenuWindow />
    </div>
  );
}

export default App;
