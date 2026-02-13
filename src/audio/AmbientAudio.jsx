import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function AmbientAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const shouldPlay = sessionStorage.getItem("playAudio");

    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={music} type="audio/mpeg" />
    </audio>
  );
}
