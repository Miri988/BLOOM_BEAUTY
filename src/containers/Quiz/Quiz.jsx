import { Button } from "components";
import styles from "./Quiz.module.scss";

export const Quiz = () => {
  return (
    <section className={styles.quiz}>
        <div className={styles.content}>
           <img className={styles.image} src={require('assets/images/the_girl.png')} alt="the girl"/>
            <div className={styles.header}>
                The Skin Quiz
            </div>
            <div className={styles.description}>
                Meet the quiz that will curate a routine just just just as unique as you are.
            </div>
            <Button className={`button ${styles.button}`}>Explore More</Button>
        </div>
    </section>
  )
}
