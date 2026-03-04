import styles from '../scss/App.module.scss';
import Header from './Header';
import Builder from './Builder';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Builder />
        <div className={styles.actionBar}>
          
        </div>
      </div>
    </div>
  );
}

export default App
