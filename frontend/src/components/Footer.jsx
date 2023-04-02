import { Container } from "react-bootstrap";
import { TwitterShareButton } from 'react-twitter-embed';


export const Footer = () => {
  return (
    <>
      {/* Twitter Button */}
      <div className="d-flex justify-content-center">
        <TwitterShareButton
          options={{ text: '#HPをシェアします！' }}
        />
      </div>
      {/* Twitter Button */}

      {/* Footer */}
      <footer
        className="text-center text-lg-start text-muted"
        style={{ backgroundColor: '#FFF5E9' }}
      >
        <Container fluid
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2023 Copyright: Recursion Team Red
        </Container>
      </footer>
      {/* Footer */}
    </>
  );
};
