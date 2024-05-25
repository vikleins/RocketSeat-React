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
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",},
      {type: "link", content:"jane.design/doctorcare"},
                 
    ],
    publishedAt: new Date('2024-05-23 20:00:00'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes", 
      role: "CTO @Rocketseat"

    },
    content: [
      //Parei no minuto 06:35
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",},
      {type: "link", content:"jane.design/doctorcare"},
           
    ],
    publishedAt: new Date('2024-05-10 20:00:00'),
  }
]

//iteração



function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        < Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key = {post.id}
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
            />
            )
          })}

          
        </main>

      </div>
    </>
  )
}

export default App
