import TrackItem from "./TrackItem";

function PlaylistContainer({ tracks, activeId, onSelect, onDelete, onSave }) {
  
  if (tracks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-500">
        <span className="text-5xl mb-4">🎵</span>
        <p className="text-base">No tracks yet — add your first song!</p>
      </div>
    );
  }

 
  return (
    <div>
      {tracks.map((track, index) => (
        <TrackItem
          key={track.id}                    
          track={track}                     
          index={index}
          isActive={track.id === activeId}
          onSelect={onSelect}               
          onDelete={onDelete}               
          onSave={onSave}                  
        />
      ))}
    </div>
  );
}

export default PlaylistContainer;
