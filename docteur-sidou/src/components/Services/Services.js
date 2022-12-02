import {Header} from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { Title1 } from '../Titles/Title1.js';
import { Title3 } from '../Titles/Title3.js';
import { Images } from '../Images/Images.js';
import { Link } from "react-router-dom";
import raf from '../../resources/images/raf.jpg';


export const Services = () => {
    return (
        <>
            <Header/>

            <main role="main">
                <header className="grid">
                    <div className="s-12 padding-2x">
                        <Title1 classname={"text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20"} content="Les liens utiles" />
                        <p className="text-size-20 text-white text-center center text-uppercase">En cas de questions, de problèmes, ou pour tout renseignement<br /> n'hesitez pas à consulter les liens ci-dessous.</p>
                    </div>
                </header>

                <section className="grid">
                    <div className="m-12 l-6 padding-2x background-white">
                        <p className="text-strong text-size-80 text-red">01</p>
                        
                        <h2 className="text-size-50 text-line-height-1 text-dark"><b> <a className="text-size-50" href="https://www.ligneazur.org/"> Ligne Azur</a></b></h2>
                        <Title3 classname={''} content="0 810 20 30 40  7J/7 8h 23h." />
                        <p>Lutte contre homophobie + prévention comportement suicidaire . </p>
                    </div>
                    
                    <Images classname={"m-12 l-6"} src={raf} alt='' />
                </section>

                <section className="grid">
                    <Images classname={"m-12 l-6"} src={raf} alt='' />
                    
                    <div className="m-12 l-6 padding-2x background-dark">
                        <p className="text-strong text-size-80 text-red">02</p>
                        
                        <h2 className="text-size-50 text-line-height-1 margin-bottom-30 text-white"><b><a className="text-size-50" href="https://www.sida-info-service.org/">Sida info Service</a></b></h2>

                        <Title3 classname={''} content={'0 800 840 800 7/7 24/24'} />
                        <Title3 classname={''} content={'0 810 636 636 (0, 06 €/min + prix appel), anonyme et confidentiel'} />
                        <p>Guyane :
                            05 94 24 10 10
                            lundi, mercredi, vendredi
                            17h à 23h
                            . </p>
                    </div>
                </section> 

                <section className="grid">
                    <div className="m-12 l-6 padding-2x background-aqua">
                        <p className="text-strong text-size-80 text-white">03</p>
                        
                        <h2 className="text-size-50 text-line-height-1 text-white"><b> <a className="text-size-50" href="https://www.sexualites-info-sante.fr">Sexualitée info santée</a> </b></h2>

                        <Title3 classname={''} content={'0 800 00 69 07 du lundi au vendredi 9h à 21h'} />
                        <p>Parler et faire de la prévention autour de différents sujets autour de la sexualité (découverte, maladies, orientation etc…). </p>
                    </div>
                    
                    <Images classname={"m-12 l-6"} src={raf} alt='' />
                </section>

                <section className="grid">
                    <Images classname={"m-12 l-6"} src={raf} alt='' />

                    <div className="m-12 l-6 padding-2x background-orange">
                        <p className="text-strong text-size-80 text-white">04</p>

                        <h2 className="text-size-50 text-line-height-1 text-white"><b> <a className="text-size-50" href="https://www.vih-info-soignants.fr">VIH Info Soignants</a> </b></h2>

                        <Title3 classname={''} content={'0 810 630 515'} />
                        <p>répond aux questions d'ordre médical et thérapeutique concernant le VIH, les hépatites et les IST.VIH Info Soignants s'adresse aussi aux professionnels de santé qui s'interrogent sur la prise en charge.</p>
                    </div>
                </section>

                <section className="grid margin-bottom">
                    <div className="s-12 padding-2x background-dark">
                        <Link to={'contact'} className="s-12 m-9 l-3 center button text-size-20 text-white background-red">Contactez-nous</Link>
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