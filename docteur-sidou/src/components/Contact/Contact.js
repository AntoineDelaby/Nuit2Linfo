import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import team01 from "../../resources/images/team-01.jpg";
import donia from "../../resources/images/donia.jpg";
import david from "../../resources/images/david.jpg";
import antoine from "../../resources/images/Antoine.jpg";
import marion from "../../resources/images/marion.jpg";
import raf from "../../resources/images/raf.jpg";

export const Contact = () => {
    const play = () => {
        var audio = document.getElementById("audio");
        audio.play();
    };

    return (
        <>
        <Header/>
        <main role="main">
        <header className="grid">
        	<div className="s-12 padding-2x">
            <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">Besoin d'aide? Faite vous aider!</h1>
          </div>
        </header>
        
        <section className="grid margin-bottom-20">
          <div className="m-12 l-7 center">
            <div className="s-12 padding-2x background-white text-center">                  
              <h2 className="text-size-20 margin-bottom-10 text-strong text-uppercase text-dark">Adresse</h2>
              <p>2 Rue du Bleu Mouton</p>
              <p>59800 Lille, FRANCE</p>

              <h2 className="text-size-20 margin-top-30 margin-bottom-10 text-strong text-uppercase text-dark">E-mail</h2>                
              <p><a className="text-primary-hover" href="mailto:contact@sampledomain.com">contact@sampledomain.com</a></p>
              <p><a className="text-primary-hover" href="mailto:office@sampledomain.com">office@sampledomain.com</a></p>               

              <h2 className="text-size-20 margin-top-30 margin-bottom-10 text-strong text-uppercase text-dark">Télephone</h2>
              <p><a href="tel: 03 28 52 05 10">03 28 52 05 10</a></p>
            </div>
              <iframe className="s-12 center" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10122.716045388239!2d3.0637831!3d50.6330795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c6d23c0ffaf8e69!2sAIDES!5e0!3m2!1sfr!2sfr!4v1669943551243!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>

          <section className="grid margin">
              <h2 className="s-12 text-white text-thin text-size-30 text-white text-uppercase margin-top-bottom-20 center text-center">Notre <b>Equipe de Rêve</b></h2>
              <div className="s-12 m-6 l-2 margin-bottom">
                  <img src={team01}/>
                  <h4 className="background-primary padding text-strong">ANDRE Benjamin</h4>
                  <p className="margin-bottom-10 text-primary text-uppercase">Dev</p>
              </div>
              <div className="s-12 m-6 l-2 margin-bottom">
                  <img src={donia}/>
                  <h4 className="background-primary padding text-strong">MTAT Donia</h4>
                  <p className="margin-bottom-10 text-primary text-uppercase">Dev</p>
              </div>
              <div className="s-12 m-6 l-2 margin-bottom">
                  <img src={david}/>
                  <h4 className="background-primary padding text-strong">BATTAIS David</h4>
                  <p className="margin-bottom-10 text-primary text-uppercase">Dev</p>
              </div>
              <div className="s-12 m-6 l-2 margin-bottom">
                  <img src={antoine}/>
                  <h4 className="background-primary padding text-strong">DELABY Antoine</h4>
                  <p className="margin-bottom-10 text-primary text-uppercase">Dev</p>
              </div>
              <div className="s-12 m-6 l-2 margin-bottom">
                  <img src={marion}/>
                  <h4 className="background-primary padding text-strong">POREE ROSADO Marion</h4>
                  <p className="margin-bottom-10 text-primary text-uppercase">Account Manager</p>
              </div>
              <div className="s-12 m-6 l-2 margin-bottom">
                  <img value="PLAY" onClick={play} src={raf}/>
                  <h4 className="background-primary padding text-strong">VERDIERE Raphaelle</h4>
                  <p className="margin-bottom-10 text-primary text-uppercase">Dev</p>
              </div>
          </section>
        </main>
        <Footer />
      <script type="text/javascript" src="../../resources/scripts/responsee.js"></script>
      <script type="text/javascript" src="../../resources/css/owl-carousel/owl.carousel.js"></script>
      <script type="text/javascript" src="../../resources/scripts/template-scripts.js"></script>
      <audio id="audio" src="../../resources/images/Siuuu.mp3"></audio>
        </>
    );
}