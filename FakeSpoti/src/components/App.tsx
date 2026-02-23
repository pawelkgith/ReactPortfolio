import styles from "../scss/App.module.scss";
import { useState } from "react";
import Header from './Header';
import MainWrapper from './MainWrapper';
import PlaylistSidebar from "./PlaylistSidebar";
import SocialsSidebar from "./SocialsSidebar";

function App() {
  const [volume, setVolume] = useState(1);

  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <div className={styles.container}>
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className={styles.content}>
          <SocialsSidebar onVolumeChange={(v) => setVolume(v)} />
          <MainWrapper globalVolume={volume} searchTerm={searchTerm} />
          <PlaylistSidebar />
        </div>
      </div>
    </>
  );
}

export default App;
