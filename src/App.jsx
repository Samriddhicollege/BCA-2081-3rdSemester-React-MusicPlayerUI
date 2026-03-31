

import { useEffect } from "react";
import PlaylistPage from "./pages/PlaylistPage";
import useLocalStorage from "./hooks/useLocalStorage";
import { SEED_TRACKS } from "./utils/data";

function App() {
  // This replaces: const [tracks, setTracks] = useState(SEED_TRACKS)
  // AND manually calling localStorage.setItem / getItem everywhere
  const [tracks, setTracks] = useLocalStorage("music_player", SEED_TRACKS);

 
  useEffect(() => {
    document.title = `🎵 Music — ${tracks.length} tracks`;
  }, [tracks.length]);

  return (
    
    <PlaylistPage tracks={tracks} setTracks={setTracks} />
  );
}

export default App;
