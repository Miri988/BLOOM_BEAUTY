import { Slider } from "containers/Slider/Slider";
import { ItemCard } from "containers/ItemCard/ItemCard";
import styles from "./Arrivals.module.scss"

export const Arrivals = () => {
    
    return (
        <section className={styles.arrivals}>
            <div className={`heavier upper header ${styles.header}`}>
                <img src = {require('assets/images/bloom_left.png')} alt = ""/>
                New Arrivals
                <img src = {require('assets/images/bloom_right.png')} alt = ""/>
                <div className="link subheader">See All</div>
            </div>
            <Slider size={4}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </Slider>
        </section>
    )
  }