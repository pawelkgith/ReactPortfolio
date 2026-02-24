import styles from '../scss/Header.module.scss';
import { MouseEvent, useState } from 'react';
import ContactPopUp from './ContactPopUp';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value:string) => void;
}

function Header( { searchTerm, onSearchChange } : HeaderProps) {
  const clearSrc = "/assets/img/clear.svg";
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  
  const handleGithubRedirect = (event:MouseEvent) => {window.open("https://github.com/pawelkgith/portfolio", "_blank")};

  return (
    <>
      <div className={styles.header}>
        <h1>Fake Spoti</h1>
        <div className={styles.searchbarDiv}>
          <input
            type="text"
            placeholder="Insert your song name..."
            className={styles.searchbar}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className={styles.clear} onClick={() => onSearchChange("")}>
            <img src={clearSrc} className={styles.clearIcon} alt="Search" />
          </button>
        </div>
        <nav className={styles.contact}>
          <button className={styles.navBtn} onClick={handleGithubRedirect}>GitHub</button>
          <button className={styles.navBtn} onClick={() => setIsPopUpOpen(!isPopUpOpen)}>Contact</button>
        </nav>
        {isPopUpOpen && <ContactPopUp 
                        onClose={() => setIsPopUpOpen(false)} 
                        title="Contact me"
                        content="In case you were intrested in my projects, you cant contact me via e-mail: "
                        email="pawelkielbasa500@gmail.com"
                        />}
      </div>
    </>
  );
}

export default Header;
