import {Header} from '../Header/Header.js';
import { SlidingGrid } from '../SlidingGrid/SlidingGrid.js';
import { InfoSection } from '../InfoSection/InfoSection.js';
import { Sidate } from '../Sidate/Sidate.js';
import { Info2Section } from '../Info2Section/Info2Section.js';
import { ReseauSection } from '../ReseauSection/ReseauSection.js';
import { Footer } from '../Footer/Footer.js';

export const Game = () => {
    return (
        <>
      <Header/>

      <main role="main">
      <SlidingGrid/>
      <InfoSection/>
      <Sidate/>
      <Info2Section />
      <ReseauSection />
      </main>
      <Footer />
      <script type="text/javascript" src="../../resources/scripts/responsee.js"></script>
      <script type="text/javascript" src="../../resources/css/owl-carousel/owl.carousel.js"></script>
      <script type="text/javascript" src="../../resources/scripts/template-scripts.js"></script>
      </>
    );
}