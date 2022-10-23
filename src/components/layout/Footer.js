import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className='bold'>Adote um Pet</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer