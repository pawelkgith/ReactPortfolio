import styles from "../scss/App.module.scss";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import MainWrapper from "./MainWrapper";
import PlaylistSidebar from "./PlaylistSidebar";
import ControlSidebar from "./ControlSidebar";
import PopUp from "./PopUp";
import data from '../assets/SongsData.json';

export interface PlaylistData {
  id: string;
  name: string;
  songIds: number[];
}

function App() {
  const [volume, setVolume] = useState<number>(() => {
    const savedVolume = localStorage.getItem("volume");
    return savedVolume ? Number(savedVolume) : 1;
  });

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [playlists, setPlaylists] = useState<PlaylistData[]>(() => {
    const savedPlaylists = localStorage.getItem("myPlaylists");
    return savedPlaylists ? JSON.parse(savedPlaylists) : [];
  });

  const [colorMode, setColorMode] = useState<string>(() => {
    const mode = localStorage.getItem("mode");
    return mode ? mode : 'green';
  });

  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [addedSongId, setAddedSongId] = useState<number | null>(null);
  const [activeSongId, setActiveSongId] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAddPlaylist = () => {
    if (newPlaylistName.trim() === "") return;
    const newPlaylist: PlaylistData = {
      id: Date.now().toString(),
      name: newPlaylistName,
      songIds: [],
    };

    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylistName("");
    console.log(newPlaylist.songIds);
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
          setAddedSongId(null);
          return playlist;
        }
        
        return {
          ...playlist, songIds: [...playlist.songIds, addedSongId]
        }
      });
    });
    setAddedSongId(null);
  }

  const handleRemovePlaylist = (id: string) => {
    setPlaylists((prev) => prev.filter((playlist) => playlist.id !== id));
    if(selectedPlaylistId === id)
      setSelectedPlaylistId(null);
  }

  const handleTogglePlay = (id: number) => {
    if(activeSongId === id)
      setIsPlaying(!isPlaying);

    else {
      setActiveSongId(id);
      setIsPlaying(true);
    }
  }

  const activeSong = data.find(el => el.id === activeSongId);

  const currentSongImg = activeSong ? `/assets/img/${activeSong.title.split(' ').join('').toLowerCase()}.jpg` : null;

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSrc = activeSong ? `/assets/music/${activeSong.title.split(' ').join('').toLowerCase()}.mp3` : "";

  const handleSeek = (time: number) => {
    if(audioRef.current)
      audioRef.current.currentTime = time;
      setCurrentTime(time);
  }
  
  useEffect(() => {
    if(audioRef.current && audioSrc)
      if(isPlaying)
        audioRef.current.play();
      else
        audioRef.current.pause();
  }, [isPlaying, activeSongId]);

  useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

  useEffect(() => {
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("myPlaylists", JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    localStorage.setItem("mode", colorMode);
  }, [colorMode]);

  return (
    <>
      <div className={`${styles.container} ${colorMode==="blue" ? styles.containerBlueMode : ''}`}>
        <audio ref={audioRef} src={audioSrc} 
          onTimeUpdate={() => audioRef.current && setCurrentTime(audioRef.current.currentTime)} 
          onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)} 
        />
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} colorMode={colorMode}/>
        <div className={styles.content}>
          <ControlSidebar onVolumeChange={(v) => setVolume(v)} volume={volume} currentSongImg={currentSongImg} currentTime={currentTime} duration={duration} onSeek={handleSeek} colorMode={colorMode} />
          <MainWrapper globalVolume={volume} searchTerm={searchTerm} selectedPlaylistId={selectedPlaylistId} playlists={playlists} onAddClick={handleOpenAddMenu} activeSongId={activeSongId} onTogglePlay={handleTogglePlay} isAppPlaying={isPlaying} colorMode={colorMode} />
          <PlaylistSidebar playlists={playlists} onCreateClick={() => setIsCreateModalOpen(true)} onSelectPlaylist={handlePlaylistSelect} selectedId={selectedPlaylistId} onDeletePlaylist={handleRemovePlaylist} setColorMode={setColorMode} colorMode={colorMode} />
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
                  onKeyDown={(e) => {if(e.key === 'Enter') {handleAddPlaylist()}}}
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
