/* eslint-disable react/no-unescaped-entities */
import './home.css'
import '../App.css'
import confetti from "canvas-confetti";
import Doggy from '../assets/picture/doggy.png'
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Home = () => {

  const size = window.innerWidth;
  console.log(size);

  useEffect(() => {
    const size = window.innerWidth;
    var end = Date.now() + 2 * 1000;

    var colors = ["#AF89B4", "#fcf7ee"];

    size > 600
      ? (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0, y:0.7 },
            colors: colors,
            zIndex: 2500,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y:0.7 },
            colors: colors,
            zIndex: 2500,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })()
      : (function frame() {
          confetti({
            spread: 180,
            particleCount: 3,
            origin: { y: -0.1 },
            startVelocity: -15,
            colors: colors,
            zIndex: 2500,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
  }, []);
  


  return (
    
  
      <div className="background flex">
        <h1>
          Caroro Birthday
        </h1>
        <p>Youpilalala un site lila pour fêter son anniversaire !!!</p>
        <p>Bon alors qu'est ce qu'on y fait sur ce site web ? </p>
        <p>Baaaaaa oui une escape game d'anniversaire evidément ! </p>
        <p>J'espère que vous êtes choooow toutes les deux !</p>
        <p>Quand vous etes prêtes a démarer cliquer sur le doggy! Oui tout les boutons du site seront des doggy.</p>
        <Link to="/escape-room-1">
                    <img  className='flower_picture' src={Doggy} />
        </Link>
      </div>


  )
}

export default Home