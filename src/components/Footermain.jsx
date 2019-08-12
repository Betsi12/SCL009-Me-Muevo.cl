import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import youtube from "../image/youtube.png";

const Footermain = () => {
  return (
    <footer className="footermain">
      <Container>
        <Row>


          <Col xs={12} md={6}>

            <h2>
              <a href="https://www.memuevo.cl" alt="Fundación Me Muevo"></a>
            </h2>

            <p className="rrss">
              RUT: 65.088.095-1
                 </p>

            <p className="rrss">
              Contactanos: <a href="tel: +56987433259" title="Teléfono">+56987433259</a>
            </p>
            <p className="rrss">
              Providencia, Santiago de Chile
                 </p>
          </Col>
          <Col xs={12} md={6}>
            <a className="rrss" href="mailto:comunicaciones@memuevo.cl" title="Enviar correo">comunicaciones@memuevo.cl</a>

            <p className="rrss">
              <strong>© Fundación Me Muevo 2014 </strong>
            </p>
            <div className="socialMedia">
              <p> Siguenos en:</p>
              <a target='_blank' href="https://www.facebook.com/memuevo.cl"><img className="logo_facebook" src={facebook} alt="logo Facebook" /></a>
              <a target='_blank' href="https://www.twitter.com/memuevoCl"><img className="logo_twitter" src={twitter} alt="logo Twitter" /></a>
              <a target='_blank' href="https://www.youtube.com/channel/UCyl9QdUUFMCDh0HARVzvvwg"><img className="logo_youtube" src={youtube} alt="logo youtube" /></a>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>

  );
}
export default Footermain;