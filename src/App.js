import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/*Templates && Components*/
import TemplateInfo from './views/TemplateInfo';
import TemplateLaw from './views/TemplateLaw';
import TemplateNews from './views/TemplateNews';
import TemplateRegister from './views/TemplateRegister';
import TemplateWhoWeAre from './views/TemplateWhoWeAre';
import TemplateHome from './views/TemplateHome';
import './App.css';
import Navbarmobile from './components/Navbarmobile';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {

    return (
      <>

        <BrowserRouter>

          <div >

            <Navbarmobile />

            <Switch>
              <Route exact path='/' component={TemplateHome} />
              <Route exact path='/artritis-reumatoide' component={TemplateInfo} />
              <Route exact path='/ley-ricarte-soto' component={TemplateLaw} />
              <Route exact path='/noticias' component={TemplateNews} />
              <Route exact path='/registro' component={TemplateRegister} />
              <Route exact path='/quienes-somos' component={TemplateWhoWeAre} />
            </Switch>
          </div>
        </BrowserRouter>

        <footer>
          <div class="wraper">
            <h2>
              <a href="http://www.memuevo.cl" title="Fundación Me Muevo"> </a>
            </h2>

            <div class="datos">
              <p>
                <strong>© Fundación Me Muevo 2014</strong>
              </p>
              <p> RUT: 65.088.095-1</p>
              <p>
                "Teléfono:"
        <a href="tel: +56987433259" title="Llamar">+56987433259</a>
              </p>
              <p>Providencia, Santiago de Chile</p>
              <p>
                <a href="mailto:comunicaciones@memuevo.cl" title="Enviar correo"></a>
                comunicaciones@memuevo.cl<a />
              </p>
            </div>
            <nav>
              <a href="http://www.memuevo.cl" title="Inicio" Inicio></a>
            </nav>
            <ul class="redes">
              <li>
                <a href="http://www.facebook.com/memuevo.cl" title="Facebook" class="fb" id="fb"
                  target="black"></a>
              </li>
              <li>
                <a href="http://www.twitter.com/memuevoCl" title="Twitter" class="tw" id="tw"
                  target="black"></a>
              </li>
              <li>
                <a href="http://www.youtube.com/channel/UCy19QdUUFMCDh0HARVzvvwg" title="Youtube" class="yt" id="yt"
                  target="black"></a>
              </li>
            </ul>
            </div>
    </footer>
    </>
        );
    }
    }
      export default App;
