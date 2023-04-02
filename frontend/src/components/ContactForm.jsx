import { Container, Row, Col, Form } from "react-bootstrap";

export const ContactForm = () => {
  return (
    <>
      <Container>
        <Row className="text-dark py-5">
          <Col md={8} className="offset-md-2">
            <h1 className="display-2 text-center mb-3 card-title">Contact</h1>
            <p className="mb-4 text-center">ご質問等は下記のフォームよりお気軽にお問い合わせください。<br />
                                            内容を確認後、担当者よりご連絡させて頂きます。
            </p>
            <Form method="post" action="">
              <div className="mb-3">
                <input type="text" className="form-control" name="name" placeholder="名前" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" name="Email" placeholder="メールアドレス" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="contents" rows="5" placeholder="お問い合わせ内容"></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
