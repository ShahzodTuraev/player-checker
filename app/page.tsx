"use client";
import React, { useEffect, useState, useRef } from "react";

function KakaoMap() {
  const [, setKakaoMap] = useState<any>(null);
  const container: any = useRef();
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d1db27fee46319754b8ba9842dea4e81&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(latitude, longitude);
        const options = {
          center,
          level: 3,
        };

        const map = new kakao.maps.Map(container.current, options);
        setKakaoMap(map);

        // TODO: 커스텀 오버레이 생성
        var marker = new kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);
      });
    };
  }, [container, latitude, longitude]);

  return (
    <>
      <div
        id="map"
        ref={container}
        style={{
          width: "100%",
          height: "700px",
        }}
      ></div>
      <br />
      <button onClick={handleClick}>Current Location</button>
    </>
  );
}

export default KakaoMap;
