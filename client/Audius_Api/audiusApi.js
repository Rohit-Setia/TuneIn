export const fetchAudiusTracks = async (mood) => {
  const response = await fetch(
    `https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(
      mood
    )}&limit=10&app_name=Moodify`
  );  
  const { data } = await response.json();

  const tracks = data.map((track) => ({
    id: track.id,
    title: track.title,
    artist: track.user?.name,
    image: track.artwork?.['150x150'] || null,
    preview: `https://discoveryprovider.audius.co/v1/tracks/${track.id}/stream?app_name=Moodify`, 
  }));

  return tracks;
};
