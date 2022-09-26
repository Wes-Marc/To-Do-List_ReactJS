import styles from './App.module.css';
import  rocketLogo from './assets/rocket-logo.svg';

function App() {

  return (
    <>
      <header className={styles.header}>
        <span><img src={rocketLogo} /></span>
        <h1>todo</h1>
      </header>
      <h1>Hello world</h1>
    </>
  )
}

export default App
