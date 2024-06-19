"use client";

import { useState } from "react";

const Scanning = () => {
  const [text, setText] = useState<null | string>(null);
  if ("NDEFReader" in window) {
    setText("hello bro");
  }
  return <div>{text}</div>;
};

export default Scanning;
