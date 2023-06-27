import styles from "./Pagination.module.scss"

export const Pagination = () => {
  return (
    <nav className={styles.pagination}>
            <i className={`icofont-rounded-left link icon ${styles.icon}`} ></i>
            <div className={styles.pages}>
              <span className={styles.page}>1</span>
              <span className={`${styles.page} ${styles.active}`}>2</span>
              <span className={styles.page}>...</span>
              <span className={styles.page}>7</span>
            </div>
            <i className={`icofont-rounded-right link icon ${styles.icon}`} ></i>
    </nav>
  )
}
