import { useState, useEffect } from "react";
import PlaylistContainer from "../components/PlaylistContainer";
import AddTrackForm from "../components/AddTrackForm";
import NowPlayingBar from "../components/NowPlayingBar";
import Button from "../components/Button";
import { getTotalDuration } from "../utils/data";

function PlaylistPage({ tracks, setTracks }) {
  const [activeId, setActiveId] = useState(null);
  const [search, setSearch]     = useState("");
  const [loading, setLoading]   = useState(true); // CRITERION 8

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer); // cleanup
  }, []);

  

  // CREATE — add a new track
  const handleAdd = (newTrack) => {
    setTracks([...tracks, newTrack]);
  };

  // DELETE — remove a track by id
  const handleDelete = (id) => {
    setTracks(tracks.filter((t) => t.id !== id));
    if (activeId === id) setActiveId(null); // deselect if deleted
  };

  // UPDATE — save edited title + artist
  const handleSave = (id, newTitle, newArtist) => {
    setTracks(
      tracks.map((t) =>
        t.id === id ? { ...t, title: newTitle, artist: newArtist } : t
      )
    );
  };

  const handleSelect = (id) => {
    setActiveId((prev) => (prev === id ? null : id)); // toggle
  };

  
  const handleSearch = (e) => setSearch(e.target.value);


 
  const filteredTracks = tracks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.artist.toLowerCase().includes(search.toLowerCase())
  );

  const activeTrack  = tracks.find((t) => t.id === activeId) || null;
  const totalDuration = getTotalDuration(tracks);

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* ── Header ── */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎵</span>
          <h1 className="text-lg font-bold tracking-tight">Music</h1>
        </div>

       
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search tracks…"
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-green-500 w-56"
        />

        <p className="text-sm text-gray-500">
          {tracks.length} songs · {totalDuration}
        </p>
      </header>

      {/* ── Main body ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── Left: Playlist ── */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Playlist title row */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Playlist</p>
              <h2 className="text-2xl font-bold mt-1">Late Night Drive</h2>
              <p className="text-sm text-gray-400 mt-1">{tracks.length} songs · {totalDuration}</p>
            </div>
         
            <Button onClick={() => { setTracks([]); setActiveId(null); }} variant="danger">
              Clear All
            </Button>
          </div>

          {/* Column labels */}
          {!loading && filteredTracks.length > 0 && (
            <div className="grid grid-cols-[24px_44px_1fr_64px] gap-3 px-6 py-2 text-xs text-gray-500 uppercase tracking-widest font-semibold border-b border-gray-800">
              <span>#</span>
              <span></span>
              <span>Title</span>
              <span className="text-right">Time</span>
            </div>
          )}

          {/* Track list — scrollable */}
          <div className="flex-1 overflow-y-auto px-4 py-3">

            
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <span className="text-4xl mb-3">⏳</span>
                <p className="text-sm">Loading playlist…</p>
              </div>
            ) : (
              
              <PlaylistContainer
                tracks={filteredTracks}
                activeId={activeId}
                onSelect={handleSelect}
                onDelete={handleDelete}
                onSave={handleSave}
              />
            )}

           
            {!loading && search && filteredTracks.length === 0 && (
              <p className="text-center text-gray-500 text-sm mt-16">
                No results for "{search}"
              </p>
            )}
          </div>
        </main>

        {/* ── Right: Sidebar ── */}
        <aside className="w-72 border-l border-gray-800 p-5 flex flex-col gap-5 overflow-y-auto">

         
          <AddTrackForm onAdd={handleAdd} />

          {/* Stats panel */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Stats
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Tracks",   value: tracks.length },
                { label: "Duration", value: `${Math.floor(tracks.reduce((a, t) => { const [m,s]=t.duration.split(":").map(Number); return a+m*60+s; }, 0)/60)}m` },
                { label: "Showing",  value: filteredTracks.length },
                { label: "Selected", value: activeTrack ? "♫" : "—" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-700/50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
                  <p className="text-xl font-bold text-green-400 mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

         
        </aside>
      </div>

      
      <NowPlayingBar track={activeTrack} total={tracks.length} />
    </div>
  );
}

export default PlaylistPage;
