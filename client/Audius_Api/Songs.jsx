import React, { useState, useRef, useEffect } from "react";
import "./Songs.css";
import MoodInput from "../mood/MoodInput";
import SubmitButton from "../mood/SubmitButton";
import { fetchAudiusTracks } from "./audiusApi";

export default function Mood() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null); // 🔥 Scrollable container
  const [submit, setSubmit] = useState(false);
  const [mood, setMood] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const currentAudioRef = useRef(null);

  const PAGE_SIZE = 10;

  const handleSearch = async () => {
    if (!mood.trim()) return;
    try {
      setLoading(true);
      const firstPage = await fetchAudiusTracks(mood, {
        offset: 0,
        limit: PAGE_SIZE,
      });
      setTracks(firstPage);
      setOffset(PAGE_SIZE);
      setHasMore(firstPage.length === PAGE_SIZE);
      setSubmit(true);
    } catch (err) {
      console.error(err);
      alert("Error fetching tracks: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const nextPage = await fetchAudiusTracks(mood, {
        offset,
        limit: PAGE_SIZE,
      });
      setTracks((prev) => {
        const map = new Map(prev.map((t) => [t.id, t]));
        nextPage.forEach((t) => map.set(t.id, t));
        return Array.from(map.values());
      });
      setOffset((prev) => prev + PAGE_SIZE);
      setHasMore(nextPage.length === PAGE_SIZE);
    } catch (err) {
      console.error(err);
      alert("Error loading more tracks: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Auto-scroll when tracks appear, scrolls to center area
  useEffect(() => {
    if (submit && tracks.length > 0 && containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const scrollTo = containerHeight * 0.25; // Scroll 25% down to center songs area

      containerRef.current.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  }, [submit, tracks]);

  const scrollOffset = () => {
    if (window.innerWidth < 640) return 245;
    if (window.innerWidth < 1024) return 300;
    return 320;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-[95%] mx-auto ${
        submit
          ? "min-h-[calc(100vh-180px)] overflow-y-auto no-scrollbar"
          : "min-h-[calc(100vh-180px)] overflow-hidden"
      }`}
    >
      {/* Search section */}
      <section
        className={`text-white text-2xl sm:text-3xl flex flex-col justify-center items-center text-center transition-all duration-700 ease-in ${
          !submit ? "min-h-screen" : "pt-24"
        }`}
      >
        <h2 className="px-4">How are you feeling today?</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-[550px] mx-auto mt-6 px-4">
          <MoodInput value={mood} onChange={(e) => setMood(e.target.value)} />
          <SubmitButton onClick={handleSearch} />
        </div>

        {loading && <p className="text-base mt-4">Loading tracks...</p>}
      </section>

      {/* Song results */}
      {submit && tracks.length > 0 && (
        <>
          <section className="text-white text-center mt-10">
            <h3 className="text-xl sm:text-2xl">🎵 Tracks for "{mood}"</h3>
          </section>

          <div className="relative w-full mt-8">
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-4 sm:px-10 py-2"
            >
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="w-[240px] sm:w-[260px] min-w-[200px] flex-shrink-0 border border-orange-600 rounded-2xl hover:bg-[#493222] hover:shadow-[0_4px_20px_rgba(255,115,0,0.4)] flex flex-col h-[260px] text-white justify-center items-center"
                >
                  <p className="font-semibold text-white h-[30px] w-full text-sm sm:text-lg text-center line-clamp-1">
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
                        if (currentAudioRef.current && currentAudioRef.current !== song.target) {
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

            {/* Scroll Buttons */}
            <button
              onClick={() =>
                scrollRef.current.scrollBy({
                  left: -scrollOffset(),
                  behavior: "smooth",
                })
              }
              className={`flex absolute left-2 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-[60px] sm:w-[60px] z-10 text-xl sm:text-4xl text-white bg-transparent hover:bg-[#ff5500] rounded-full justify-center items-center`}
            >
              <span className="h-full w-full absolute top-1 right-0.5 text-transparent hover:text-white">
                {"<"}
              </span>
            </button>

            <button
              onClick={() =>
                scrollRef.current.scrollBy({
                  left: scrollOffset(),
                  behavior: "smooth",
                })
              }
              className={`flex absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-[60px] sm:w-[60px] z-10 text-xl sm:text-4xl text-white bg-transparent hover:bg-[#ff5500] rounded-full justify-center items-center`}
            >
              <span className="h-full w-full absolute top-1 left-0.5 text-transparent hover:text-white">
                {">"}
              </span>
            </button>
          </div>

          {/* Load More Button */}
          <div className="justify-center flex mt-10 mb-32">
            <button
              onClick={handleLoadMore}
              disabled={!hasMore || loading}
              className={`min-w-[84px] w-full max-w-[100px] rounded-full h-10 
                ${!hasMore || loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} 
                bg-[#D6742A] hover:bg-[#ff5500] text-white text-sm font-bold`}
            >
              {loading ? "Loading…" : hasMore ? "Load More" : "No More"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
