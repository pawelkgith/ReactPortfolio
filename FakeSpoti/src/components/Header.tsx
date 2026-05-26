import styles from '../scss/Header.module.scss';
import { MouseEvent, useState } from 'react';
import PopUp from './PopUp';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value:string) => void;
  colorMode: string;
}

function Header( { searchTerm, onSearchChange, colorMode } : HeaderProps) {
  const clearSrc = "assets/img/clear.svg";
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  
  const handleGithubRedirect = () => {window.open("https://github.com/pawelkgith/ReactPortfolio", "_blank")};

  return (
    <>
      <div className={`${styles.header} ${colorMode === "blue" ? styles.headerBlueMode : ""}`}>
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
          <button className={styles.navBtn} onClick={handleGithubRedirect}>Projects</button>
          <button className={styles.navBtn} onClick={() => setIsPopUpOpen(!isPopUpOpen)}>Contact</button>
        </nav>
        {isPopUpOpen && 
        <PopUp 
          onClose={() => setIsPopUpOpen(false)} 
          title="Contact me"
          colorMode={colorMode}>
            <div className={styles.contactContent}>
              <h3>In case you were intrested in my projects, contact me via e-mail: </h3>
              <h2>pawelkielbasa500@gmail.com</h2>
            </div>
          </PopUp>
        }
      </div>
    </>
  );
}

export default Header;
