
export const SEED_TRACKS = [
  { id: 1, title: "Midnight City",     artist: "M83",              duration: "4:03", emoji: "🌙" },
  { id: 2, title: "Ocean Drive",       artist: "DY8",             duration: "3:47", emoji: "🌊" },
  { id: 3, title: "Starboy",           artist: "Rockey",           duration: "3:50", emoji: "✨" },
];

const EMOJIS = ["🎵", "🎸", "🎹", "🎺", "🥁", "🎷", "🎻", "🎤", "🎧", "❤"];

// Helper: build a new track object from title + artist
export function createTrack(title, artist) {
  return {
    id: Date.now(),
    title: title.trim(),
    artist: artist.trim(),
    duration: `${Math.floor(Math.random() * 3) + 2}:${String(
      Math.floor(Math.random() * 60)
    ).padStart(2, "0")}`,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
  };
}

// Helper: calculate total playlist duration
export function getTotalDuration(tracks) {
  const totalSecs = tracks.reduce((acc, t) => {
    const [m, s] = t.duration.split(":").map(Number);
    return acc + m * 60 + s;
  }, 0);
  return `${Math.floor(totalSecs / 60)} min ${totalSecs % 60} sec`;
}
