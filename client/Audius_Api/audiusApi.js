// audiusApi.js
export const fetchAudiusTracks = async (mood, { offset = 0, limit = 10 } = {}) => {
  const url = `https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(
    mood
  )}&limit=${limit}&offset=${offset}&app_name=Moodify`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Audius error ${res.status}`);
  const { data } = await res.json();

  return data.map((track) => ({
    id: track.id,
    title: track.title,
    artist: track.user?.name,
    image: track.artwork?.['150x150'] || null,
    preview: `https://discoveryprovider.audius.co/v1/tracks/${track.id}/stream?app_name=Moodify`,
  }));
};
