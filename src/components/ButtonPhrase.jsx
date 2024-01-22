import React from 'react';
import phrases from '../utils/phrases.json';
import randomIndex from '../services/randomIndex';

const ButtonPhrase = ({setquote}) => {

   const sentence = randomIndex(phrases);

    const handleButton = () => {
        const sentence = randomIndex(phrases);
        setquote(sentence);
    }

  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtonPhrase;