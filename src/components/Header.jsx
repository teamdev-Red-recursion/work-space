import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import coffeeLogo from "./image/images_by_nav/COFFEE.png";


export const HeaderNav = () => {
  return (
    <Navbar expand="lg" className='p-1' style={{ backgroundColor: '#FFF5E9' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={coffeeLogo} alt="Recursion Coffee" width="130" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="#" active>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" disabled>
                comming soon
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex" method="get" target="_blank" action="https://www.google.com/search">
            <FormControl
              type="text"
              placeholder="Search"
              aria-label="Search"
              name="as_q"
              className="me-2"
            />
            <input type="hidden" name="hl" value="ja" />
            <input type="hidden" name="as_sitesearch" value="https://into-the-program.com/" />
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
