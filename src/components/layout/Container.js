import styles from './Container.module.css'

function Container({children}) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default Container

//Nota: O Container é uma tag que envolve outros componentes, desta forma, estes componentes passam a ser os seus filhos, então através das propriedades (props) declara-se os seus filhos ({children}).