import { Button } from "components";
import styles from "./Insta.module.scss";

export const Insta = () => {
  return (
    <section className={styles.insta}>
        <div className={`heavier upper header ${styles.header}`}>
                <img src = {require('assets/images/bloom_left.png')} alt = ""/>
                Share how you blossomed with <a href = "/">#bloombeauty</a>
                <img src = {require('assets/images/bloom_right.png')} alt = ""/>
                <div className="link subheader">See All</div>
        </div>
        <div className={styles.shots}>
            {Array(8).fill().map((_v, i) => {
            return (
            <div className={styles.post} key={i}> 
                <div className="square image">
                    <div className="content posts">
                        <img src={require(`assets/images/in${i+1}.png`)} alt = ""/>
                    </div>
                </div>
                <div className={styles.cover}>
                    <Button className={`button fluid ${styles.button} ${styles.preview}`}>See In&nbsp;<i className="icofont-instagram"></i></Button>
                    <Button className={`button fluid ${styles.button}`}>Byu Now</Button>
                </div>
            </div>
            )})}   
        </div>
        <Button className={`button ${styles.button}`}>Follow Us</Button>
    </section>
  )
}
