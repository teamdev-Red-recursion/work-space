// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Container, Row, Col, Card, Image } from "react-bootstrap";


export const Slider = () => {
  return (
    // npm i swiperインストール済み
    // Swiperの参考資料 https://devsakaso.com/react-how-to-use-swiper/
    // Swiperのsliderデモ https://swiperjs.com/demos

    // スペースをイメージするためbgを仮で設定
    <Container fluid>
    <Row className="">
      <Col className="slider-img bg-info" style={{width: '100vh', height: '20em'}}>
      </Col>
    </Row>
    </Container>
  );
};
