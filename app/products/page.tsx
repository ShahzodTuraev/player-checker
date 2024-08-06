"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Profile = () => {
  const [info, setInfo] = useState<any>(null);
  const data = () =>
    fetch("/api/jwtcheck")
      .then((res) => res.json())
      .then((sdata) => setInfo(sdata));
  useEffect(() => {
    data();
  }, []);
  const nameText = info?.userData?.name;
  return (
    <div style={{ margin: 50 }}>
      <textarea name="gdfg" id=""></textarea>
      <p>{nameText}</p>
      <Image
        src="https://careernet-streaming-bucket.s3.us-east-1.amazonaws.com/images/nmm/bf07cd9d-481a-45fb-a12f-ff5e644a1571.jpeg "
        alt="koko"
        width={300}
        height={200}
      />
    </div>
  );
};

export default Profile;
