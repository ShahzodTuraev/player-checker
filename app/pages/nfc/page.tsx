"use client";

import { useEffect, useState } from "react";

const Scanning = () => {
  const [text, setText] = useState<null | string>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && "NDEFReader" in window) {
      setText("hello bro");
    }
  }, []);
  return <div>{text}</div>;
};

export default Scanning;
