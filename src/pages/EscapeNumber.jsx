import InputAnswer from "../components/InputAnswer"
import '../App.css'

const EscapeNumber = () => {
  return (
    <div className="background flex">
        <h1>Call me maybe ?</h1>
        <p>Mama Mia here i come again lalalala !! Bravo vous deux!</p>
        <p>Ok on va commencer a corser un peut les choses alors !
            Saurez vous décoder le code suivant : 
        </p>
        <h2>2222777666777666555555338</h2>
        <p>J'ai eu l'idée de cette enigme en prenant la ligne qui part de Porte de Choisy jusqu'au centre de la commune d'Orly si ça peut vous aider</p>

        <InputAnswer answer= {"carorollet"} route={"/escape-room-3"}  />
    </div>
  )
}

export default EscapeNumber