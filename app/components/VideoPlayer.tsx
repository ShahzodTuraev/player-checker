"use client";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-hls";

const VideoPlayer = ({ options }: any) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, options);

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, [options]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" width="400px" height="300px" />
    </div>
  );
};

export default VideoPlayer;
