import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        console.log('deletar')

        onDeleteComment(content);
    }


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

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer >

                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    

                 </footer>
            </div>
        </div>
    )
}