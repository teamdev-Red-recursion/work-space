import { Container, Row, Col, Card, Image, Form } from "react-bootstrap";
import axios from "axios";
import { RandomImage } from "./RandomImg";


export const CoffeeCardCreate = () => {
  async function submitForm(e) {
    e.preventDefault();
    const data = {
      title: document.getElementById("title").value,
      text: document.getElementById("text").value,
      date: new Date().toDateString(),
    };

    try {
      const response = await axios.post("http://43.207.84.153/articles", data);
      console.log(response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  return (
    <>
      <Container>
        <h1 className="display-2 text-center my-3 card-title">Create card</h1>
        <Row className="d-flex my-4">
          <Col xs={12} lg={6} className="offset-lg-3">
            <Card className="d-flex flex-column justify-content-center shadow bg-body rounded p-2 mb-3">
              <Row className="mx-1 align-items-center">
                <Col sm={4} className="coffee-img">
                  <RandomImage />
                </Col>
                <Col sm={8}>
                  <Card.Body className="text-center">
                    <Form onSubmit={submitForm}>
                      <Card.Text className="fs-3 pb-2 mt-0 text-center">
                        <div>
                          <input
                            type="text"
                            id="title"
                            name="text"
                            style={{ width: "95%" }}
                            placeholder="title"
                            maxLength="20"
                            required
                          />
                        </div>
                      </Card.Text>
                      <Card.Text className="text-explanation">
                        <div>
                          <textarea
                            id="text"
                            name="text"
                            style={{ width: "95%" }}
                            placeholder="Contents"
                            maxLength="150"
                            rows="5"
                            required
                          />
                        </div>
                      </Card.Text>
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Create
                        </button>
                      </div>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );


  // ここからはテスト用

  // function submitForm() {
  //   const data = {
  //     title: document.getElementById("title").value,
  //     text: document.getElementById("text").value,
  //     date: new Date().toDateString(),
  //   };
  //   fetch("http://43.207.84.153/articles", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }

  // return (
  //   <>
  //     <Container>
  //       <h1 className="display-2 text-center my-3 card-title">Create card</h1>
  //       <Row className="d-flex my-4">
  //         <Col xs={12} lg={6} className="offset-lg-3">
  //           <Card className="d-flex flex-column justify-content-center shadow bg-body rounded p-2 mb-3">
  //             <Row className="mx-1 align-items-center">
  //               <Col sm={4} className="coffee-img">
  //                 <Image
  //                   src={coffeeImg1}
  //                   className="scaled-coffee-image rounded"
  //                   alt="coffee画像"
  //                   width="4016"
  //                   height="6016"
  //                 />
  //               </Col>
  //               <Col sm={8}>
  //                 <Card.Body className="text-center">
  //                   <Form>
  //                     <Card.Text className="fs-3 pb-2 mt-0 text-center">
  //                       <div>
  //                         <input
  //                           type="text"
  //                           id="title"
  //                           name="text"
  //                           style={{ width: "95%" }}
  //                           placeholder="title"
  //                           maxlength="20"
  //                           required
  //                         />
  //                       </div>
  //                     </Card.Text>
  //                     <Card.Text className="text-explanation">
  //                       <div>
  //                         <textarea
  //                           id="text"
  //                           name="text"
  //                           style={{ width: "95%" }}
  //                           placeholder="Contents"
  //                           maxlength="150"
  //                           rows="5"
  //                           required
  //                         />
  //                       </div>
  //                     </Card.Text>
  //                     <div>
  //                       <button
  //                         onClick={submitForm}
  //                         className="btn btn-primary"
  //                       >
  //                         Create
  //                       </button>
  //                     </div>
  //                   </Form>
  //                 </Card.Body>
  //               </Col>
  //             </Row>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </>
  // );
};
