"use client";
import { useAudioPlayerStore } from "@/store/useAudioPlayerStore";
import { Check, Flag, Settings } from "lucide-react";
import React, { useState } from "react";

const MusicController = () => {
  const [soundEffects, setSoundEffects] = useState(false);

  const { isPlaying, togglePlay } = useAudioPlayerStore();

  return (
    <div className="flex flex-col gap-4 lg:mt-6 mt-2">
      {/* Sound Effects */}
      <div className="flex items-center justify-between">
        <p className="uppercase text-red-500">Sound Effects</p>
        <button
          className={`border w-6 h-6 flex items-center justify-center rounded transition-all ${
            soundEffects ? "bg-red-500 text-white" : "border-red-500"
          }`}
          onClick={() => setSoundEffects(!soundEffects)}
          aria-label="Toggle Sound Effects"
        >
          {soundEffects && <Check size={16} />}
        </button>
      </div>

      {/* Music */}
      <div className="flex items-center justify-between">
        <p className="uppercase text-red-500">Music</p>
        <button
          className={`border w-6 h-6 flex items-center justify-center rounded transition-all ${
            isPlaying ? "bg-red-500 text-white" : "border-red-500"
          }`}
          onClick={togglePlay}
          aria-label="Toggle Music"
        >
          {isPlaying && <Check size={16} />}
        </button>
      </div>

      {/* Visual Settings */}
      <div className="flex items-center justify-between">
        <p className="uppercase text-red-500">Visual Settings</p>
        <button
          className="border w-6 h-6 flex items-center justify-center rounded border-red-500"
          aria-label="Open Visual Settings"
        >
          <Settings size={16} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default MusicController;
