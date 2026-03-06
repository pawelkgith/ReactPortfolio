import styles from '../scss/App.module.scss';
import Header from './Header';
import Builder from './Builder';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleCopy = (text: string) => {
    setText(text);
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
