import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Title3 } from "../Titles/Title3";

export const About = () => {
    return (
        <>
        <Header/>
        <main role="main">
        <header className="grid">
        	<div className="s-12 padding-2x">
            <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">Le Sida</h1>
            <p className="text-size-20 text-white text-center center text-uppercase">BLABLA.</p>
          </div>
        </header>
  
        <section className="grid">
          <div className="m-12 l-6 padding-2x background-white">
            <h2 className="text-dark">BLABLABLA</h2>
            <p>BLABLABLA.<br/><br/></p>
            <h2 className="text-dark">BLABLABLA</h2>
            <p>BLABLABLA.</p>
          </div>
          
            <source className="l-6 hide-s hide-m" src="/video/Epidémiologie.mp4" type="video/mp4" />
        </section>
        
        <section className="grid margin margin-bottom padding-2x background-primary">
          <div className="s-12 m-6 l-3">
            <span className="timer text-size-50 text-white text-strong">38,4</span> <span className="text-size-50 text-white text-strong">milions</span>
            <h3 className="text-uppercase text-strong">de personnes vivaient avec le VIH fin 2021.</h3>
          </div>

          <div className="s-12 m-6 l-3">
            <span className="timer text-size-50 text-white text-strong">1,7</span> <span className="text-size-50 text-white text-strong">milions</span>
            <h3 className="text-uppercase text-strong">de personnes ont été infectées par le VIH en 2021.</h3>
          </div>

          <div className="s-12 m-6 l-3">
            <span className="timer text-size-50 text-white text-strong">650 000</span>
            <h3 className="text-uppercase text-strong">personnes sont décédées de maladies liées au sida en 2021.</h3>
          </div>

          <div className="s-12 m-6 l-3">
            <span className="timer text-size-50 text-white text-strong">54</span> <span className="text-size-50 text-white text-strong">%</span>
            <Title3 className="text-uppercase text-strong" content="de l'ensemble des personnes vivant avec le VIH sont des femmes et des filles."/>
          </div>
        </section>
         </main>
        <Footer />
      <script type="text/javascript" src="../../resources/scripts/responsee.js"></script>
      <script type="text/javascript" src="../../resources/css/owl-carousel/owl.carousel.js"></script>
      <script type="text/javascript" src="../../resources/scripts/template-scripts.js"></script>
        </>
    );
}