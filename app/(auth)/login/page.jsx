import LoginForm from "@/components/loginForm/loginForm"
import styles from "./login.module.css"
import { auth, signIn } from "@/lib/auth"
import { handleGithubLogin } from "@/lib/action"

const LoginPage = async () => {

  const session = await auth()

  console.log(session)

  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage