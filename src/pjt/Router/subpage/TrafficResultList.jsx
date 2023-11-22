import React from 'react';

const trafficKorData = {
    도보: 'WALK',
    버스: 'BUS',
    급행버스: 'EXPRESSBUS',
    지하철: 'SUBWAY',
    비행기: 'AIRPLANE',
    기차: 'TRAIN',
};

const TrafficResultList = ({ mode, sectionTime, route }) => {
    return (
        <>
            <ul className="traffic-result-list-pic-wrap">
                <li>
                    <img className="trarffic-result-picture" src={`./pjt_draft/sub/css/imgs/${mode}.png`} />
                    <div className={`traffic-result-list-line ${mode}`}></div>
                </li>
                <li>
                    {Object.keys(trafficKorData).find((key) => trafficKorData[key] === mode)}
                    &nbsp;&nbsp;&nbsp;
                    {parseInt(sectionTime / 60 / 60) === 0
                        ? `${parseInt(sectionTime / 60)}분 ${sectionTime % 60}초`
                        : `${parseInt(sectionTime / 60 / 60)}시간 ${
                              parseInt(sectionTime / 60) - parseInt(sectionTime / 60 / 60) * 60
                          }분 ${sectionTime % 60}초`}
                    &nbsp;&nbsp;&nbsp; {route}
                </li>
            </ul>
        </>
    );
};

export default TrafficResultList;
