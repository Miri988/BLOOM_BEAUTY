import { Slider } from "containers/Slider/Slider";
import { BlogCard } from "containers/BlogCard/BlogCard";
import styles from "./Blog.module.scss";

export const Blog = () => {
    
    return (
        <section className={styles.blog}>
            <div className={`heavier upper header ${styles.header}`}>
                <img src = {require('assets/images/bloom_left.png')} alt = ""/>
                On the Blog
                <img src = {require('assets/images/bloom_right.png')} alt = ""/>
                <div className="link subheader">See All</div>
            </div>
            <Slider size={3}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Slider>
        </section>
    )
  }