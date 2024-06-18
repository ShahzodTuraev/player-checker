"use client";
import { useEffect, useState } from "react";

const NFCReader: React.FC = () => {
  const [nfcData, setNfcData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleNFCReading = async () => {
      if ("NDEFReader" in window) {
        const ndef = new (window as any).NDEFReader();

        try {
          await ndef.scan();
          console.log("Scan started successfully.");

          ndef.onreadingerror = () => {
            setError("Error reading NFC tag.");
          };

          ndef.onreading = (event: any) => {
            const decoder = new TextDecoder();
            for (const record of event.message.records) {
              console.log("Record type:", record.recordType);
              console.log("MIME type:", record.mediaType);
              console.log("=== data ===\n" + decoder.decode(record.data));
              setNfcData(decoder.decode(record.data));
            }
          };
        } catch (error) {
          setError(`Error: ${error}`);
        }
      } else {
        setError("Web NFC is not supported on this browser.");
      }
    };

    handleNFCReading();
  }, []);

  return (
    <div>
      <h1>NFC Reader</h1>
      {error && <p>Error: {error}</p>}
      {nfcData ? <p>NFC Data: {nfcData}</p> : <p>No NFC data read yet.</p>}
    </div>
  );
};

export default NFCReader;
