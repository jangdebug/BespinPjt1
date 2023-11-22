import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainSlideButton from './subpage/MainSlideButton';
import './css/buttons.css';
import './css/slider/mainPageSlider.css';

const Buttons = ({ checkedArea, setCheckedArea, hideButtons, setHideButtons }) => {
    const [angle, setAngle] = useState(0);
    const carouselRef = useRef(null);
    const carouselCardRefs = useRef([]);

    // Handler START //
    const prevBtnClickHander = () => {
        console.log('prevBtnClickHander CLICKED!!');
        setAngle((prevAngle) => prevAngle - rotateAngle);
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    };

    const nextBtnClickHander = () => {
        console.log('nextBtnClickHander CLICKED!!');
        setAngle((prevAngle) => prevAngle + rotateAngle);
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    };

    const moveToSubPageBtnClickHandler = (area) => {
        console.log('[Main_01] moveToSubPageBtnClickHandler() CLICKED');
        setCheckedArea(area);
        console.log('checkedArea:', checkedArea);
    };
    // Handler END //

    const rotateAngle = 360 / 10; // 카드 개수에 맞는 각도 계산 값
    const radian = ((rotateAngle / 2) * Math.PI) / 180;
    const sceneRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        carousel.style.transform = carousel.classList.contains('row')
            ? `rotateX(${-angle}deg)`
            : `rotateY(${-angle}deg)`;
    });

    return (
        <div className="main01_title">
            <div className="how">오늘은 여기 어때?</div>
            {/* <div className="main01_title">오늘은 여기 어때?</div> */}
            <div className="scene" ref={sceneRef}>
                <div className="carousel" ref={carouselRef}>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[0] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Busan/부산1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('부산')}
                            />
                            <div className="main01_title">부산</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[1] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Seoul/서울1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('서울')}
                            />
                            <div className="main01_title">서울</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[2] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Jeju/제주.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('제주')}
                            />
                            <div className="main01_title">제주</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[3] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./pics_area/인천/인천.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('인천')}
                            />
                            <div className="main01_title">인천</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[4] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Suwon/수원1.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('수원')}
                            />
                            <div className="main01_title">수원</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[5] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./pics_area/대전/대전.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('대전')}
                            />
                            <div className="main01_title">대전</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[6] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./pics_area/대구/대구.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('대구')}
                            />
                            <div className="main01_title">대구</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[7] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Gyeongju/경주1.webp"
                                onClick={() => moveToSubPageBtnClickHandler('경주')}
                            />
                            <div className="main01_title">경주</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[8] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./pics_area/전주/전주.jpg"
                                onClick={() => moveToSubPageBtnClickHandler('전주')}
                            />
                            <div className="main01_title">전주</div>
                            <br />
                        </Link>
                    </div>
                    <div className="carousel-card" ref={(el) => (carouselCardRefs.current[9] = el)}>
                        <Link to="/subpage">
                            <img
                                className="carousel-card-img"
                                src="./trip_pics/Yeosu/여수1.webp"
                                onClick={() => moveToSubPageBtnClickHandler('여수')}
                            />
                            <div className="main01_title">여수</div>
                            <br />
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <div className={`buttons_wrap ${hideButtons ? 'hidden' : ''}`}>
                <br />
                <MainSlideButton direction="prev" onClick={prevBtnClickHander} />
                <MainSlideButton direction="next" onClick={nextBtnClickHander} />
            </div>
        </div>
    );
};

export default Buttons;
