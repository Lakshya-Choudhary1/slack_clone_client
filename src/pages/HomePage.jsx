import React, { useEffect, useRef } from "react";

const HomePage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const player = audioRef.current;
    if (!player) return;

    player.volume = 1;

    const startAudio = () => {
      player.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    };

    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("keydown", startAudio, { once: true });

    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("keydown", startAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/SF-cum.mp3"
      loop
      preload="auto"
      autoPlay
    />
  );
};

export default HomePage;