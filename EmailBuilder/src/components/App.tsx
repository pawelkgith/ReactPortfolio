import styles from '../scss/App.module.scss';
import Header from './Header';
import Builder from './Builder';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [resetKey, setResetKey] = useState(0);

  const handleCopy = () => {
    if(text) {
      setText(text);
      navigator.clipboard.writeText(text);
    }
  }

  const handleReset = () => {
    setText('');
    setResetKey(prev => prev + 1);
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Builder key={resetKey} setText={setText}/>
        <div className={styles.actionBar}>
          <Button usage="controlButton" value="Copy to clipboard" onButtonClick={handleCopy} color="btnCopy" />
          <Button usage="controlButton" value="Reset" onButtonClick={handleReset} color="btnReset" />
        </div>
      </div>
    </div>
  );
}

export default App
