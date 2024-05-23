import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Klein</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title="07 de maio ás 22:39" dateTime="2024-05-07 22:39:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
               <footer>
                <button type="submit">Publicar</button>
                </footer> 
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}