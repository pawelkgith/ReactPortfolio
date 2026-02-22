import styles from "../scss/App.module.scss";
import { useState } from "react";
import Header from './Header';
import MainWrapper from './MainWrapper';
import PlaylistSidebar from "./PlaylistSidebar";
import SocialsSidebar from "./SocialsSidebar";

function App() {
  const [volume, setVolume] = useState(1);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <SocialsSidebar onVolumeChange={(v) => setVolume(v)} />
          <MainWrapper globalVolume={volume} />
          <PlaylistSidebar />
        </div>
      </div>
    </>
  );
}

export default App;
