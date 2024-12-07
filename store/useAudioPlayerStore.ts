// stores/audioPlayerStore.ts
"use client";

import { create } from "zustand";

interface AudioPlayerState {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const useAudioPlayerStore = create<AudioPlayerState>((set, get) => {
  let audio: HTMLAudioElement | null = null;
  const defaultSong = "/backgroundMusic.mp3";

  const initializeAudio = () => {
    if (!audio) {
      audio = new Audio(defaultSong);
      audio.loop = true;
    }
    return audio;
  };

  return {
    isPlaying: false,
    togglePlay: () => {
      const audioInstance = initializeAudio();
      if (get().isPlaying) {
        audioInstance.pause();
        set({ isPlaying: false });
      } else {
        audioInstance.play();
        set({ isPlaying: true });
      }
    },
  };
});
