import { Slider } from "containers/Slider/Slider";
import { ItemCard } from "containers/ItemCard/ItemCard";
import styles from "./Bestsellers.module.scss";

export const Bestsellers = () => {
    
    return (
        <section className={styles.bestsellers}>
            <div className={`heavier upper header ${styles.header}`}>
                <img src = {require('assets/images/bloom_left.png')} alt = ""/>
                Best Sellers
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