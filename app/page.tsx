"use client";
<<<<<<< HEAD

import { useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  const handleDeleteInput = (id: any) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChange = (id: any, value: any) => {
    setInputs(
      inputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const handleSubmit = () => {
    const result = inputs.map((input, index) => ({
      index,
      value: input.value,
    }));
    console.log(result);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={input.id} style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleChange(input.id, e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={() => handleDeleteInput(input.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
      <button onClick={handleSubmit}>Submit</button>
=======
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
>>>>>>> 3759c0da42bbac46012cf5d07d3ad6e8f7e266e5
    </div>
  );
}
