import {Header} from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';


export const Sidada = () => {
    return (
        <>
            <Header/>

            <main role="main">
                <header class="grid">
                    <div class="s-12 padding-2x">
                        <h1 class="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">Le jeu</h1>
                    </div>
                </header>
            </main>

            <Footer />
            <script type="text/javascript" src="../../resources/scripts/responsee.js"></script>
            <script type="text/javascript" src="../../resources/css/owl-carousel/owl.carousel.js"></script>
            <script type="text/javascript" src="../../resources/scripts/template-scripts.js"></script>
        </>
    );
}