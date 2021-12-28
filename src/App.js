import MenuWindow from "./components/menuWindow";
import './App.css';

import img from "./images/post.gif"


function App() {
  return (
    <div className="outer">
      <div id="char-rec">
        <h1>Joshua Collado</h1>
        <hr />
        <img src={img} />
      </div>
      <MenuWindow />
    </div>
  );
}

export default App;
