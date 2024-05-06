import InputAnswer from "../components/InputAnswer"


const EscapeMovie = () => {

  return (
    <div className="background flex">
      <h1>ettttt Action !</h1>
      <p><strong>J'avais un rêve</strong> c'est que tout le monde ai aimé ce film, il est noté 5,3 sur sens critique... Autant vous dire qu'un paquet de monde ne l'a pas compris, <strong>il leur a glisser entre les doigts</strong>. </p>
      <p><strong>Est ce que ta mère sait</strong> qu'on y retrouve de grand acteurs comme <strong>la reine dansante</strong> Meryl Streep</p>.
      <p>C'est un film ou l'on chante une ode au <strong>Miel, Miel</strong> ou à <strong>L'argent, l'argent</strong>.</p>

      <p>Je suis, je suis</p>
      
      <InputAnswer answer= {"mama mia"} route={"/escape-room-2"}  />
    
    </div>
  )
}

export default EscapeMovie