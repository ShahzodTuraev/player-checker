"use client";
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
    </div>
  );
};

export default Profile;
