import { Container, Row, Col, Card, Image } from "react-bootstrap";


export const Footer = () => {
  const shareUrl = `https://twitter.com/intent/tweet?text=HPをシェアします！&hashtags=Recursion&url=https://yourwebsite.com`;

  const handleClick = () => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Twitter Button */}
      <Container className="text-center">
        <button onClick={handleClick} className="btn btn-primary">
          Tweet
        </button>
      </Container>
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


{
  /* html参照
  ----------------------------------


    <!-- Twitter Button -->
  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="HPをシェアします！"
    data-hashtags="Recursion" data-show-count="false">Tweet</a>
  <!-- Twitter Button -->

  <!-- Footer -->
  <footer class="text-center text-lg-start text-muted" style="background-color: #FFF5E9;">
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2023 Copyright: Recursion Team Red
    </div>
  </footer>
  <!-- Footer -->

  */
}
