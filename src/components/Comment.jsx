import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/vikleins.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Klein</strong>
                            <time title="07 de maio ás 22:39" dateTime="2024-05-07 22:39:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! </p>

                </div>
                <footer >

                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                    

                 </footer>
            </div>
        </div>
    )
}