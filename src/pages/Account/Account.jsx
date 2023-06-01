import { SignInForm } from "../../containers/SignInForm/SignInForm"
import { useEffect } from "react";

import styles from "./Account.module.scss"

export const Account = () => {
  
  useEffect( () => {

  }, [])

  return (
    <div className={styles.account}>
    <SignInForm/>
    </div>
  )
}
