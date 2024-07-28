"use client";
import React, { useRef, useEffect } from "react";
import SignaturePad from "signature_pad";

const SignaturePadComponent = ({ onSave }: any) => {
  const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    // @ts-ignore
    signaturePadRef.current = new SignaturePad(canvas);
  }, []);

  const clearSignature = () => {
    // @ts-ignore
    signaturePadRef.current.clear();
  };

  const saveSignature = () => {
    // @ts-ignore
    if (signaturePadRef.current.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      // @ts-ignore
      const dataUrl = signaturePadRef.current.toDataURL("image/png");
      onSave(dataUrl);
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        style={{ border: "1px solid #000" }}
      />
      <button onClick={clearSignature}>Clear</button>
      <button onClick={saveSignature}>Save</button>
    </div>
  );
};

export default SignaturePadComponent;
