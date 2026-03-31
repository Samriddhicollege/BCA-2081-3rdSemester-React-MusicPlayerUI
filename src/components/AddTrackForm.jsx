
import { useState } from "react";
import Button from "./Button";
import { createTrack } from "../utils/data";

function AddTrackForm({ onAdd }) {
  
  const [title, setTitle]   = useState("");
  const [artist, setArtist] = useState("");
  const [err, setErr]       = useState("");

  
  const handleAdd = () => {
    
    if (!title.trim())  { setErr("Song title is required.");  return; }
    if (!artist.trim()) { setErr("Artist name is required."); return; }

    onAdd(createTrack(title, artist)); 
    setTitle("");
    setArtist("");
    setErr("");
  };

 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
        Add New Track
      </p>

      
      <input
        value={title}
        onChange={(e) => { setTitle(e.target.value); setErr(""); }}
        onKeyDown={handleKeyDown}
        placeholder="Song title…"
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-green-500 mb-3"
      />
      <input
        value={artist}
        onChange={(e) => { setArtist(e.target.value); setErr(""); }}
        onKeyDown={handleKeyDown}
        placeholder="Artist name…"
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-green-500"
      />

      
      {err && (
        <p className="text-red-400 text-xs mt-2">{err}</p>
      )}

      <div className="mt-4">
       
        <Button onClick={handleAdd} variant="primary">+ Add Track</Button>
      </div>
    </div>
  );
}

export default AddTrackForm;
