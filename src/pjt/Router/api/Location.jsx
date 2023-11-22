import React, { useEffect, useState} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const { kakao } = window;

const keyword = '광안 관광지';

//const Location2 = () => {
const Location2 = () => {
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
  
    useEffect(() => {
      if (!map) return
      const ps = new kakao.maps.services.Places()
      //libraries=services에서 지원하는 Places
  
      //ps.keywordSearch("센텀 맛집", (data, status, _pagination) => {
      ps.keywordSearch(keyword, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds()
          let markers = []
          console.log('data ---> ', data);
  
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              //content: data[i].place_name,
              content: data[i].place_name,
              content2: data[i].place_url,
            })
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setMarkers(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
      })
    }, [map])
  
    return (
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "500px",
          height: "200px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info &&info.content === marker.content && (
               <div style={{color:"#000", width:"200px", height:"100px"}}>
                <a href={marker.content2} target="_blank">
                  {marker.content}
                </a>
                </div> 
            )}
          </MapMarker>
        ))}
      </Map>
    )
  }

  export default Location2;