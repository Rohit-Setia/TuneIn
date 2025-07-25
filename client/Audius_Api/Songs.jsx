import React, { useState, useRef } from "react";
import MoodInput from "../mood/MoodInput";
import SubmitButton from "../mood/SubmitButton";
import { fetchAudiusTracks } from "./audiusApi";

export default function Mood() {
  const [mood, setMood] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentAudioRef = useRef(null);

  const handleSearch = async () => {
    if (!mood.trim()) return;

    try {
      setLoading(true);
      const results = await fetchAudiusTracks(mood);
      setTracks(results);
    } catch (err) {
      console.error(err);
      alert("Error fetching tracks: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-white text-3xl flex flex-col justify-center items-center gap-6">
      <h2>How are you feeling today?</h2>

      {/* Controlled input */}
      <MoodInput value={mood} onChange={(e) => setMood(e.target.value)} />

      {/* Button triggers search */}
      <SubmitButton onClick={handleSearch} />

      {/* Loading state */}
      {loading && <p className="text-lg mt-4">Loading tracks...</p>}

      {/* Track list */}
      <div className="mt-8 w-full max-w-xl px-4">
        {tracks.length > 0 && (
          <h3 className="text-2xl mb-4 text-center">🎵 Tracks for "{mood}"</h3>
        )}

        {tracks.map((track) => (
          <div
            key={track.id}
            className="mb-6 p-4 border border-gray-600 rounded-lg flex flex-col items-center"
          >
            <p className="font-semibold text-lg text-center">
              {track.title || "Unknown Title"}
            </p>
            <p className="text-sm text-gray-300 mb-2">
              {track.artist || "Unknown Artist"}
            </p>

            {track.image ? (
              <img
                src={track.image}
                alt="Album Art"
                className="w-32 h-32 rounded-lg mb-3"
              />
            ) : (
              <p className="text-sm italic text-gray-400">No image available</p>
            )}

            {track.preview ? (
              <audio
                controls
                src={track.preview}
                onPlay={(song) => {
                  if (
                    currentAudioRef.current &&
                    currentAudioRef.current !== song.target
                  ) {
                    currentAudioRef.current.pause();
                  }
                  currentAudioRef.current = song.target;
                }}
                className="mt-2"
              />
            ) : (
              <p className="italic text-gray-400">No preview available</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
