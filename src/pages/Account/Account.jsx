import { SignInForm } from "../../containers/SignInForm/SignInForm"

import styles from "./Account.module.scss"

export const Account = () => {
  return (
    <div className={styles.account}>
    <SignInForm/>
    </div>
  )
}
