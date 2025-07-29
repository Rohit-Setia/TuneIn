import React, { useState, useRef } from "react";
import "./Songs.css";
import MoodInput from "../mood/MoodInput";
import SubmitButton from "../mood/SubmitButton";
import { fetchAudiusTracks } from "./audiusApi";

export default function Mood() {
  const scrollRef = useRef(null);
  const [submit, setSubmit] = useState(false);
  const [submit1, setSubmit1] = useState(false);
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
      setSubmit(true);
      setSubmit1(true);
    } catch (err) {
      console.error(err);
      alert("Error fetching tracks: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🛠 Responsive scroll distance
  const scrollOffset = () => {
    if (window.innerWidth < 640) return 245;
    if (window.innerWidth < 1024) return 300;
    return 320;
  };

  return (
    <>
      <div className="overflow-hidden">
        <section
          className={`text-white text-2xl sm:text-3xl flex flex-col justify-center items-center text-center transition-all duration-700 ease-in ${
            submit ? "mt-[100px]" : "h-screen justify-center"
          }`}
        >
          <h2 className="px-4">How are you feeling today?</h2>

          <div className="flex justify-center items-center gap-6">
            <MoodInput value={mood} onChange={(e) => setMood(e.target.value)} />
            <SubmitButton onClick={handleSearch} />
          </div>

          {loading && <p className="text-base mt-4">Loading tracks...</p>}

          {tracks.length > 0 && (
            <div className="w-full flex gap-5 max-w-xl px-4 justify-center items-center">
              <h3 className="text-xl sm:text-2xl mt-6 text-center">
                🎵 Tracks for "{mood}"
              </h3>
              <button className="text-xl bg-orange-500 rounded-[12px] h-10 w-[120px] mt-5">
                More Tracks
              </button>
            </div>
          )}
        </section>

        <div className="relative w-full overflow-y-scroll mt-12">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-4 sm:px-10 py-2"
          >
            {tracks.map((track) => (
              <div
                key={track.id}
                className="w-[300px] max-sm:w-[220px] min-w-[250px] max-sm:min-w-[180px] flex-shrink-0 border border-orange-600 rounded-2xl hover:bg-[#493222] hover:shadow-[0_4px_20px_rgba(255,115,0,0.4)] flex flex-col h-[280px] max-sm:h-[230px] sm:h-[300px] text-white justify-center items-center"
              >
                <p className="font-semibold text-white h-[30px] w-[250px] max-sm:w-[180px] text-sm sm:text-lg text-center line-clamp-1">
                  {track.title || "Unknown Title"}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 line-clamp-1">
                  {track.artist || "Unknown Artist"}
                </p>

                {track.image ? (
                  <img
                    src={track.image}
                    alt="Album Art"
                    className="w-20 h-20 sm:w-32 sm:h-32 rounded-lg mb-3 object-cover"
                  />
                ) : (
                  <p className="text-sm italic text-gray-400">No image</p>
                )}

                {track.preview ? (
                  <audio
                    className="mt-2 w-[160px] sm:w-[200px]"
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
                  />
                ) : (
                  <p className="italic text-gray-400 text-xs">No preview</p>
                )}
              </div>
            ))}
          </div>

          {/* Left Scroll Button */}
          <button
            onClick={() =>
              scrollRef.current.scrollBy({ left: -scrollOffset(), behavior: "smooth" })
            }
            className={`flex absolute left-2 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-[60px] sm:w-[60px] z-10 text-xl sm:text-4xl text-white bg-transparent hover:bg-[#ff5500] rounded-full justify-center items-center transition-opacity duration-500 ${
              submit1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="h-full w-full absolute top-1 right-0.5 text-transparent hover:text-white">
              {"<"}
            </span>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() =>
              scrollRef.current.scrollBy({ left: scrollOffset(), behavior: "smooth" })
            }
            className={`flex absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-[60px] sm:w-[60px] z-10 text-xl sm:text-4xl text-white bg-transparent hover:bg-[#ff5500] rounded-full justify-center items-center transition-opacity duration-500 ${
              submit1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="h-full w-full absolute top-1 left-0.5 text-transparent hover:text-white">
              {">"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
