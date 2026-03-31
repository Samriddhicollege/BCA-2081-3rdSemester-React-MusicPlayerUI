
import { useState } from "react";
import Button from "./Button";

function TrackItem({ track, index, isActive, onSelect, onDelete, onSave }) {
  
  const [editing, setEditing]       = useState(false);
  const [editTitle, setEditTitle]   = useState(track.title);
  const [editArtist, setEditArtist] = useState(track.artist);
  const [err, setErr]               = useState("");

  
  const handleSave = () => {
    if (!editTitle.trim() || !editArtist.trim()) {
      setErr("Both title and artist are required.");
      return;
    }
    onSave(track.id, editTitle.trim(), editArtist.trim()); 
    setEditing(false);
    setErr("");
  };

  const handleCancel = () => {
    setEditTitle(track.title);
    setEditArtist(track.artist);
    setEditing(false);
    setErr("");
  };

  return (
    <div
      onClick={() => !editing && onSelect(track.id)} 
      className={`flex items-center gap-3 p-3 rounded-xl mb-2 cursor-pointer transition-colors
        ${isActive
          ? "bg-green-900/30 border border-green-500/40"
          : "bg-gray-800/50 border border-transparent hover:bg-gray-800"
        }`}
    >
      {/* Track number or active indicator */}
      <div className="w-6 text-center text-sm flex-shrink-0">
        {isActive
          ? <span className="text-green-400">♫</span>
          : <span className="text-gray-500">{index + 1}</span>
        }
      </div>

      {/* Emoji as album art */}
      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
        {track.emoji}
      </div>

    
      {editing ? (
        // ── Edit Mode ──
        <div className="flex-1" onClick={(e) => e.stopPropagation()}>
          <input
            value={editTitle}
            onChange={(e) => { setEditTitle(e.target.value); setErr(""); }}
            placeholder="Song title"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-1.5 text-sm text-white outline-none mb-1"
          />
          <input
            value={editArtist}
            onChange={(e) => { setEditArtist(e.target.value); setErr(""); }}
            placeholder="Artist"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-white outline-none"
          />
        
          {err && <p className="text-red-400 text-xs mt-1">{err}</p>}
          <div className="flex gap-2 mt-2">
            <Button onClick={handleSave} variant="save">Save</Button>
            <Button onClick={handleCancel} variant="ghost">Cancel</Button>
          </div>
        </div>
      ) : (
        // ── Display Mode ──
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold truncate ${isActive ? "text-green-400" : "text-white"}`}>
            {track.title}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {track.artist} · {track.duration}
          </p>
        </div>
      )}

      {/* Action buttons — hidden while editing */}
      {!editing && (
        <div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <span className="text-xs text-gray-500 w-8 text-right">{track.duration}</span>
          {/* CRITERION 11 — Update */}
          <Button onClick={() => setEditing(true)} variant="small">✏</Button>
          {/* CRITERION 11 — Delete */}
          <Button onClick={() => onDelete(track.id)} variant="danger">✕</Button>
        </div>
      )}
    </div>
  );
}

export default TrackItem;
