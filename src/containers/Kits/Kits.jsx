import { Button } from "components";

import styles from "./Kits.module.scss";

export const Kits = ({data}) => {

  const { header, description, image, labels, isReversed } = data

  return (
    <div className={`${styles.kits} ${isReversed ? styles.reversed : ''}`}>
      <div className='content'>
          <div className={`header ${styles.header}`}>{header}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.tags}>
              {
                labels.map((v, i) => <a className={styles.label} href="/" key={i}># {v}</a>)
              }
          </div>
          <Button className={`button ${styles.button}`}>Shop Now</Button>
          <div className={`link ${styles.more}`}>
            Explore More&nbsp;<i className="icofont-long-arrow-right"></i>
          </div>
      </div>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
    </div>
  )
}
