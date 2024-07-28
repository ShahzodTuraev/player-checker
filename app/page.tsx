"use client";
import React, { useState } from "react";
import SignaturePadComponent from "./components/SignaturePad";

export default function Home() {
  const [savedImage, setSavedImage] = useState(null);

  const handleSave = (dataUrl: any) => {
    setSavedImage(dataUrl);
  };

  return (
    <div>
      <h1>Signature Pad</h1>
      <SignaturePadComponent onSave={handleSave} />
      {savedImage && (
        <div>
          <h2>Saved Signature:</h2>
          <img src={savedImage} alt="Saved Signature" />
        </div>
      )}
    </div>
  );
}
