import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
            <strong>© Fundación Me Muevo 2014</strong></p>
            <p> RUT: 65.088.095-1</p>
            <p> Providencia, Santiago de Chile</p>
            <p>"Teléfono:"<a href="tel: +56987433259" title="Llamar">+56987433259</a></p>
            <p>
              <a href="mailto:comunicaciones@memuevo.cl" title="Enviar correo"></a>
              comunicaciones@memuevo.cl
            </p>

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Redes Sociales</h5>
            <ul class="redes">
              <li>
                <a href= "http://www.facebook.com/memuevo.cl" title="Facebook" class="fb" id="fb"target="black"></a>
              </li>

              <a href="http://www.twitter.com/memuevoCl" title="Twitter" class="tw" id="tw"
                  target="black"></a>

              <li>
                <a href="http://www.youtube.com/channel/UCy19QdUUFMCDh0HARVzvvwg" title="Youtube" class="yt" id="yt"
                  target="black"></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;