import { useState, useEffect } from 'react';
import '../App.css'
import Flower from '../assets/picture/flower.png'
import DoggyB from '../assets/picture/doggyB.png';
import DoggyC from '../assets/picture/doggyC.png';
import DoggyD from '../assets/picture/doggyD.png';
import { Link } from 'react-router-dom';

const InputAnswer = ({answer, route}) => {

    const [password, setPassword] = useState('')
    const [playerWin, setPlayerWin] = useState(false)
    const [wrongAnswerMessage, setWrongAnswerMessage] = useState(false)

  useEffect(() => {
    if (password.toLowerCase() === answer) {
      setPlayerWin(true)
    }
  }, [password])


  const handleInputChange = (event) => {
    setPassword(event.target.value);
    console.log(password.toLowerCase())
    setWrongAnswerMessage(false)
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setWrongAnswerMessage(true)
    }
  };

  return (
    <div className='flex marginTop'>  
        <input
    className={'input_password'}
    type="text"
    value={password}
    onChange={handleInputChange}
    onKeyDown={handleKeyDown}
    style={{ color: wrongAnswerMessage ? "red" : "purple" }}
    placeholder="Réponse ici"
  />
    {playerWin ?  
    <Link to={route}>
                <img  className='flower_picture' src={answer =='carorollet' ? DoggyC : answer == "fleurs" ? DoggyD : DoggyB} />
    </Link> 
    : null}</div>
    )
}

export default InputAnswer