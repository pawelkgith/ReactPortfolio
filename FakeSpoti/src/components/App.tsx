import styles from "../scss/App.module.scss"
import Header from './Header';
import MainWrapper from './MainWrapper';
import PlaylistSidebar from "./PlaylistSidebar";
import SocialsSidebar from "./SocialsSidebar";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <SocialsSidebar />
          <MainWrapper />
          <PlaylistSidebar />
        </div>
      </div>
    </>
  );
}

export default App;
