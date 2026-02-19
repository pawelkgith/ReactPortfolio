import styles from '../scss/Header.module.scss';
import { MouseEvent, useState } from 'react';
import ContactPopUp from './ContactPopUp';

function Header() {
  const handleGithubRedirect = (event:MouseEvent) => {window.open("https://github.com/pawelkgith/portfolio", "_blank")};
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <h1>Fake Spoti</h1>
        <div className={styles.searchbarDiv}>
          <input
            type="text"
            placeholder="Insert your song name..."
            className={styles.searchbar}
          />
        </div>
        <nav className={styles.contact}>
          <button className={styles.navBtn} onClick={handleGithubRedirect}>GitHub</button>
          <button className={styles.navBtn} onClick={() => setIsPopUpOpen(!isPopUpOpen)}>Contact</button>
        </nav>
        {isPopUpOpen && <ContactPopUp onClose={() => setIsPopUpOpen(false)} />}
      </div>
    </>
  );
}

export default Header;
