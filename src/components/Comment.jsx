import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/9847731?v=4"  alt="" />    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={authorAndTime}>
              <strong> Tobias Ramalho</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-02-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>

          </header>
          <p>Parabéns, Van!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span> 20 </span>
          </button>          
        </footer>

      </div>  
    </div>
  )
}