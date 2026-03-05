import styles from '../scss/App.module.scss';
import Header from './Header';
import Builder from './Builder';
import Button from './Button';

function App() {
  const handleCopy = () => {

  }

  const handleReset = () => {

  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Builder />
        <div className={styles.actionBar}>
          <Button usage="controlButton" value="Copy to clipboard" onButtonClick={handleCopy} color="btnCopy" />
          <Button usage="controlButton" value="Reset" onButtonClick={handleReset} color="btnReset" />
        </div>
      </div>
    </div>
  );
}

export default App
