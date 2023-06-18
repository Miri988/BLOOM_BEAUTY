import styles from "./UpperBanner.module.scss"
import { Button } from "components";

export const UpperBanner = () => {
    
    return (
        <section className={styles.section}>
            <div className={`header ${styles.header}`}>
                Discover your inner beauty with Blossom Glow Kit
                <div className={`subheader ${styles.subheader}`}>Great gift for yourself and loved ones</div>
            </div>
            <Button className={`button ${styles.button}`}>Shop Now</Button>
        </section>
    )
  }