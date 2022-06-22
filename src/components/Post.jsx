
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/9847731?v=4"/>
          <div className={styles.authorInfo}>
            <strong> Vanessa Bach </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-02-11 08:13:30">Publicado há 1h</time>        
      </header>

      <div className={styles.content}>
          <p> My name is Vanessa.</p>
          <p>✓ Oceanographer</p>
          <p>✓ MSC Ocean and Earth Dynamics </p>
          <p>✓ Full Stack Web Developer </p>
          <p>✓ Learning React </p>
          <p>New Project </p>{' '}
          <p><a href="operantar.live">Dados Operantar</a></p>{' '}
          <p><a href="">#antartica</a></p>{' '}
          <p><a href="">#operantarxl</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>        
      </form>

      <div className={styles.commentList}>
        <Comment />      
      </div>
    </article>
  )
}