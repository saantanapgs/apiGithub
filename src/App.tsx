import axios from "axios"
import {useState} from 'react' 
import './App.css'

  type GithubData = {
    name: string,
    bio: string,
    avatar_url: string
  }

function App() {
  const [userName, setUserName] = useState("")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [avatar_url, setAvatarUrl] = useState("Loading...")
  const handlePequisa = () => {
    axios.get<GithubData>(`https://api.github.com/users/${userName}`).then((response) => {
      setName(response.data.name)
      setBio(response.data.bio)
      setAvatarUrl(response.data.avatar_url)
    })
  }

    return (
      <div className="container-geral">
        <div className="container">
          <header className="header-top">Consulta Github</header>
          <main>
            <div className="form">
              <input type="text" placeholder="Digite o usuário" onChange={(e) => setUserName(e.target.value)}/>
              <button onClick={handlePequisa}>Consultar</button>
            </div>
            <div className="conteudo">
              <div>
                <img src={avatar_url}/>
                <h1>{name}</h1>
                <p>{bio}</p>
              </div>
            </div>
          </main>

        </div>
      </div>
    )
}

export default App
