
import './App.css';
import RandomPhrase from './components/RandomPhrase';
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';

function App() {
  

    const sentence = randomIndex(phrases);
    
    const [quote, setquote] = useState(sentence);

  return (
    <div className='container'>
      <h1>Galletas de la fortuna</h1>
      <ButtonPhrase
        setquote = {setquote}
      />
      <RandomPhrase
        quote = {quote}
      />
    </div>
  )
}

export default App;
