

function NowPlayingBar({ track, total }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-800 bg-gray-900 px-6 py-4 flex items-center gap-4">

    
      {track ? (
        <>
          {/* Emoji as album art */}
          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
            {track.emoji}
          </div>

          {/* Track info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-green-400 truncate">{track.title}</p>
            <p className="text-xs text-gray-400">{track.artist} · {track.duration}</p>
          </div>

          {/* Static progress bar (UI only) */}
          <div className="flex-1 max-w-xs">
            <div className="h-1 bg-gray-700 rounded-full">
              <div className="h-1 bg-green-400 rounded-full w-2/5" />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1:32</span>
              <span>{track.duration}</span>
            </div>
          </div>

          {/* Static control icons (UI only — no playback) */}
          <div className="flex gap-4 text-gray-400 text-lg flex-shrink-0">
            <span>⏮</span>
            <span className="text-green-400">⏸</span>
            <span>⏭</span>
          </div>
        </>
      ) : (
        // Idle state
        <p className="text-sm text-gray-500">
          Click any track to select it · {total} song{total !== 1 ? "s" : ""} in playlist
        </p>
      )}
    </div>
  );
}

export default NowPlayingBar;
