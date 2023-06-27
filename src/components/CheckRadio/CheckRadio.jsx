import styles from './CheckRadio.module.scss'

export const CheckRadio = (props) => {
    const {type, name, onClick, labelName} = props;
  return (
    <>
      <label className={styles.label}>
        <input 
          type = {type} 
          name = {name}
          onClick={onClick}
          hidden
        />
        { type === 'radio' && <span className={`${styles.trigger} ${styles.radio}`}></span>}
        { type === 'checkbox' && <span className={`${styles.trigger} ${styles.checkbox}`}></span>}
        {labelName}
      </label>
      
    </>
  )
}
