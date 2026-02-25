import styles from "../scss/App.module.scss";
import { useState } from "react";
import Header from "./Header";
import MainWrapper from "./MainWrapper";
import PlaylistSidebar from "./PlaylistSidebar";
import SocialsSidebar from "./SocialsSidebar";
import PopUp from "./PopUp";

export interface PlaylistData {
  id: string;
  name: string;
  songIds: number[];
}

function App() {
  const [volume, setVolume] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [playlists, setPlaylists] = useState<PlaylistData[]>([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [addedSongId, setAddedSongId] = useState<number | null>(null);

  const handleAddPlaylist = () => {
    if (newPlaylistName.trim() === "") return;
    const newPlaylist: PlaylistData = {
      id: Date.now().toString(),
      name: newPlaylistName,
      songIds: [],
    };

    setPlaylists([...playlists, newPlaylist]);

    setNewPlaylistName("");
    setIsCreateModalOpen(false);
  };

  const handlePlaylistSelect = (id: string | null) => {
    setSelectedPlaylistId(id);
  }

  const handleOpenAddMenu = (id: number) => {
    setAddedSongId(id);
  }

  const handleAddSongToPlaylist = (playlistId: string) => {
    if(addedSongId === null)
      return;

    setPlaylists((prevPlaylists) => {
      return prevPlaylists.map((playlist) => {
        if(playlist.id !== playlistId)
          return playlist;

        if(playlist.songIds.includes(addedSongId)) {
          alert("This song is already in playlist");
          return playlist;
        }
        
        return {
          ...playlist, songIds: [...playlist.songIds, addedSongId]
        }
      });
    });

    setAddedSongId(null);
  }

  return (
    <>
      <div className={styles.container}>
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className={styles.content}>
          <SocialsSidebar onVolumeChange={(v) => setVolume(v)} />
          <MainWrapper globalVolume={volume} searchTerm={searchTerm} selectedPlaylistId={selectedPlaylistId} playlists={playlists} onAddClick={handleOpenAddMenu}/>
          <PlaylistSidebar playlists={playlists} onCreateClick={() => setIsCreateModalOpen(true)} onSelectPlaylist={handlePlaylistSelect} selectedId={selectedPlaylistId} />
        </div>

        {isCreateModalOpen && (
          <PopUp
            title="Create a new playlist"
            onClose={() => setIsCreateModalOpen(false)}
          >
            <div className={styles.playlistCreation}>
              <div className={styles.form}>
                <h3>Enter name for your new playlist: </h3>
                <input
                  type="text"
                  className={styles.playlistNameInput}
                  placeholder="New playlist..."
                  value={newPlaylistName}
                  maxLength={30}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className={styles.modalActions}>
                <button className={styles.cancelButton} onClick={() => setIsCreateModalOpen(false)}>
                  Cancel
                </button>
                <button className={styles.createButton} onClick={handleAddPlaylist}>Create playlist</button>
              </div>
            </div>
          </PopUp>
        )}

        {addedSongId && (
          <PopUp title="Choose a playlist" onClose={() => setAddedSongId(null)}>
            <div className={styles.playlistSelection}>
              {playlists.length > 0 ? (
                <>
                  <h3>Select a playlist on which u want to add a song</h3>
                  <div className={styles.list}>
                    {playlists.map((playlist) => (
                    <button className={styles.playlistOption} key={playlist.id} onClick={() => handleAddSongToPlaylist(playlist.id)}>{playlist.name}</button>
                  ))}
                  </div>
                </>
              ) :
              (
                <h3>You don't have any playlists yet. Create one first.</h3>
              )}
            </div>
          </PopUp>
        )}
      </div>
    </>
  );
}

export default App;
