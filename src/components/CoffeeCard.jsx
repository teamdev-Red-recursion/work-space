import { Container, Row, Col, Card, Image } from "react-bootstrap";
import coffeeImg1 from "./image/images_by_card/coffee-image1_by_card.jpg";
import coffeeImg2 from "./image/images_by_card/coffee-image2_by_card.jpg";
import coffeeImg3 from "./image/images_by_card/coffee-image3_by_card.jpg";
import notImg from "./image/images_by_card/not-image.png";
import axios from "axios";
import { useEffect, useState } from "react";

// カード描画をDBデータを利用するように実装 #27
export const CoffeeCard = () => {
  // ============== axiosでdata取得する場合 ==================
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get("/articles");
        console.log("responseのチェック : " + response);
        setArticles(response.data.articles);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    }
    fetchArticles();
  }, []);

  return (
    <Container>
      <h1 className="cafe-name display-2 text-center my-3">
        Welcome to Recursion Coffee
      </h1>
      <Row className="d-flex my-4">
        <Col xs={12} lg={6}>
          <Card className="d-flex flex-column justify-content-center shadow bg-body rounded p-2 mb-3">
            <Row className="mx-auto align-items-center">
              <Col sm={4} className="coffee-img">
                <Image
                  src={coffeeImg1}
                  className="scaled-coffee-image rounded"
                  alt="coffee画像"
                  width="4016"
                  height="6016"
                />
              </Col>
              <Col sm={8}>
                <Card.Body className="text-center">
                  <Card.Title className="fs-3 pb-2 mt-0 text-center">
                    Cafe Macchiato
                  </Card.Title>
                  <Card.Text className="text-explanation">
                    気持ちの込められたコーヒーの一杯一杯には、コーヒー豆を栽培する農園から出発し、
                    焙煎してカップに注がれる終点まで、たくさんの人の手を旅する長いストーリーがあります。是非一度、試してみてください。
                  </Card.Text>
                  <Card.Text className="text-center pt-2">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card className="d-flex flex-column justify-content-center shadow bg-body rounded p-2 mb-3">
            <Row className="mx-auto align-items-center">
              <Col sm={4} className="coffee-img">
                <Image
                  src={coffeeImg3}
                  className="scaled-coffee-image rounded"
                  alt="coffee画像"
                  width="4016"
                  height="6016"
                />
              </Col>
              <Col sm={8}>
                <Card.Body className="text-center">
                  <Card.Title className="fs-3 pb-2 mt-0 text-center">
                    Coffee Beans
                  </Card.Title>
                  <Card.Text className="text-explanation">
                    コーヒーを普段飲んでいる方はやはりコーヒー豆から挽いて、より本格的にコーヒーを味わってみたくなりますよね。
                    コーヒー豆から挽くことによって、粒度や淹れ方にも個性、スキルが出るため、よりコーヒーの魅力に触れることができます。
                  </Card.Text>
                  <Card.Text className="text-center pt-2">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* ここからが、APIから取得した情報を表示 */}
      <Row className="d-flex my-4">
        {articles.map((article, index) => (
          <Col key={index} xs={12} lg={6}>
            <Card className="d-flex flex-column justify-content-center shadow bg-body rounded p-2 mb-3">
              <Row className="mx-auto align-items-center">
                <Col sm={4} className="coffee-img">
                  {/* ここでAPIから画像のURLを取得し、適切な画像を表示するように変更する必要があります。img追加された場合に反映
                  img追加した場合, img取得して、画像がなければnotImgを表示させる予定 */}
                  <Image
                    src={coffeeImg2 || notImg}
                    className="scaled-coffee-image rounded"
                    alt="coffee画像"
                    width="4016"
                    height="6016"
                  />
                </Col>
                <Col sm={8}>
                  <Card.Body className="text-center">
                    <Card.Title className="fs-3 pb-2 mt-0 d-flex justify-content-center">
                      {article.title}
                      {index + 1}
                    </Card.Title>
                    <Card.Text className="text-explanation">
                      {article.text}
                    </Card.Text>
                    <Card.Text className="text-center pt-2">
                      <small className="text-muted">
                        {new Date(article.date).toLocaleDateString()}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
