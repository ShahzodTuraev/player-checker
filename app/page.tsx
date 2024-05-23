"use client";
import ReactPlayer from "react-player";

export default function Home() {
  const urlArr = "https://www.youtube.com/watch?v=oUFJJNQGwhk";
  const localUrl =
    "https://careernet-streaming-bucket.s3.us-east-1.amazonaws.com/videos/output/ea01c862-4a7f-4ee1-ac76-df2775506acd/Default/HLS/ea01c862-4a7f-4ee1-ac76-df2775506acd.m3u8";
  const url =
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";
  return (
    <div className="mainContainer">
      <h2>Player test</h2>
      {/* <ReactPlayer
        // height={auto}
        width={350}
        height={250}
        controls={true}
        className="list_player"
        url={urlArr}
      /> */}
      <ReactPlayer
        // height={auto}
        width={350}
        height={250}
        controls={true}
        className="list_player"
        url={localUrl}
        config={{
          file: {
            forceHLS: true, // Force use of HLS
          },
        }}
      />
      {/*  */}
      <ReactPlayer
        width={350}
        height={250}
        controls={true}
        className="list_player"
        url={url}
        config={{
          file: {
            forceHLS: true, // Force use of HLS
          },
        }}
      />
    </div>
  );
}
