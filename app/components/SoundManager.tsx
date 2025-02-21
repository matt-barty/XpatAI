import { useEffect, useRef } from "react";

interface Sound {
  id: string;
  url: string;
  volume?: number;
}

const sounds: Sound[] = [
  { id: "intro", url: "/sounds/intro.mp3", volume: 0.3 },
  { id: "hover", url: "/sounds/hover.mp3", volume: 0.1 },
  { id: "transition", url: "/sounds/transition.mp3", volume: 0.2 },
  { id: "globe-hover", url: "/sounds/globe-hover.mp3", volume: 0.15 },
];

class SoundPool {
  private audioElements: { [key: string]: HTMLAudioElement[] } = {};
  private poolSize = 3;

  constructor(sounds: Sound[]) {
    sounds.forEach((sound) => {
      this.audioElements[sound.id] = Array.from(
        { length: this.poolSize },
        () => {
          const audio = new Audio(sound.url);
          audio.volume = sound.volume || 0.5;
          return audio;
        }
      );
    });
  }

  play(soundId: string) {
    const pool = this.audioElements[soundId];
    if (!pool) return;

    // Find an audio element that's not playing
    const availableAudio = pool.find((audio) => audio.paused);
    if (availableAudio) {
      availableAudio.currentTime = 0;
      availableAudio.play().catch(() => {});
    }
  }
}

export function useSoundManager() {
  const soundPoolRef = useRef<SoundPool | null>(null);

  useEffect(() => {
    soundPoolRef.current = new SoundPool(sounds);
  }, []);

  const playSound = (soundId: string) => {
    soundPoolRef.current?.play(soundId);
  };

  return { playSound };
}

export default function SoundManager() {
  return null; // This is a utility component, it doesn't render anything
}
