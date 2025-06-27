import styles from '@/styles/NotFound.module.css';


export default function NotFound() {
  return (
    <div className={styles.main_notfound}>

      <div className={styles.face}>
        <div className={styles.band}>
          <div className={styles.red}></div>
          <div className={styles.white}></div>
          <div className={styles.blue}></div>
        </div>
        <div className={styles.eyes}></div>
        <div className={styles.dimples}></div>
        <div className={styles.mouth}></div>
      </div>

      <h1 className={styles.h1}>Oops! Something went wrong!</h1>

    </div>
  )
}

export async function generateMetadata({ params }) {
  return {
    title: "Page Not Found | QuickURL",
  }
}
