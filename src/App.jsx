import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


import styles from './App.module.css'
import './global.css'


// author: { avatar_url: "", name: "", role: ""}
// published: Date
// content: String

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: "https://github.com/vikleins.png",
      name: "Vinicius Klein", 
      role: "Developer"

    },
    content: [
      //Parei no minuto 06:35
      Fala galeraa 👋
      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      👉 <a href="">jane.design/doctorcare</a> 
      
      <a href=""> #novoprojeto </a> 
      <a href="">#nlw</a>
      <a href="">#rocketseat</a>
                 
    ]
  },
]


function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        < Sidebar />
        <main>
          <Post />
          <Post />
        </main>

      </div>
    </>
  )
}

export default App
