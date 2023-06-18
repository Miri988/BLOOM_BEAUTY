import styles from './Stars.module.scss';

export const Stars = () => {
  return (
    <div className={styles.stars}>
        {Array(5).fill().map((_v, i) => <i className="icofont-star icon" key={i}></i>)}
        <span className="cost">(0)</span>
    </div>
  )
}
