import MenuWindow from './components/menuWindow';
import './App.css';

import img from './images/joshpixel.gif'


function App() {
  return (
    <div id='outer'>
      <div id='char-rec' className='first-screen'>
        <span className='title'>Joshua Collado</span>
        <hr className='classy-line' />
        <img src={img} />
      </div>
      <MenuWindow />
      
    </div>
  );
}

export default App;