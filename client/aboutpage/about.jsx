import React, { useState } from "react";
import { Book, Camera, Music, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="flex relative justify-center items-center min-h-screen w-full bg-transparent ">
  <div className="bg-white/5 backdrop-blur-md 
                  w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                  rounded-2xl p-6 sm:p-10 
                  shadow-2xl border border-white/10 ">
    <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-white">
      About TuneIn
    </h2>

    {/* How TuneIn Works */}
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-2 text-gray-100">How TuneIn Works</h3>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        TuneIn analyzes your mood through text input or a selfie. Our advanced algorithms detect your emotional state — happy,
        sad, energetic, or relaxed — and generate a personalized Spotify playlist that matches your mood perfectly.
      </p>
    </section>

    {/* Key Features */}
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-100">Key Features</h3>
      <div className="space-y-4">
        {/* Feature 1 */}
        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <div className="bg-white/10 p-2 rounded-md">
            <Book className="w-5 h-5 text-gray-200" />
          </div>
          <div>
            <h4 className="text-white font-semibold">Emotion Detection via Text</h4>
            <p className="text-gray-300 text-sm">
              Express your feelings in words — TuneIn curates a playlist that reflects your emotions.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <div className="bg-white/10 p-2 rounded-md">
            <Camera className="w-5 h-5 text-gray-200" />
          </div>
          <div>
            <h4 className="text-white font-semibold">Emotion Detection via Selfie</h4>
            <p className="text-gray-300 text-sm">
              Let TuneIn analyze your selfie to understand your mood and suggest fitting songs.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <div className="bg-white/10 p-2 rounded-md">
            <Music className="w-5 h-5 text-gray-200" />
          </div>
          <div>
            <h4 className="text-white font-semibold">Spotify Playlist Generation</h4>
            <p className="text-gray-300 text-sm">
              Seamlessly connect with Spotify to instantly enjoy your personalized mood playlist.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">Our Mission</h3>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        TuneIn aims to enhance your everyday life with music that resonates emotionally. Whether you need energy, peace, or focus — 
        TuneIn ensures the right song finds you, not the other way around.
      </p>
    </section>
  </div>
</div>

  );
}
