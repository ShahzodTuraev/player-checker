"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  useEffect(() => {
    const data = fetch("/api/main");
    console.log(data);
  }, []);

  return (
    <>
      <p>hello</p>
    </>
  );
}
