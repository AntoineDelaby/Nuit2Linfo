import carousel1 from '../../resources/images/carousel-01.jpg';
import carousel2 from '../../resources/images/carousel-02.jpg';
import carousel3 from '../../resources/images/carousel-03.jpg';

export const SlidingGrid = () => {
    return (
        <section className="grid">
          <div className="s-12 margin-bottom carousel-fade-transition owl-carousel carousel-main carousel-nav-white carousel-hide-arrows background-dark">
          	<div className="item background-image" style={{backgroundImage:`url(${carousel1})`}}>
              <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-pink">Contre le Sida, pour gagner, il faut informer!</p>
            </div>
          	<div className="item background-image" style={{backgroundImage:`url(${carousel2})`}}>
              <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-pink">Le Sida, KESAKO?</p>
              <p className="text-padding text-size-20 text-dark text-uppercase background-white">Envie d'en savoir plus? C'est par ici!</p>
            </div>
            <div className="item background-image" style={{backgroundImage:`url(${carousel3})`}}>
              <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-pink">Besoin d'aide</p>
              <p className="text-padding text-size-20 text-dark text-uppercase background-white">Sida info-service:
                  <a className="text-padding text-size-20 text-dark text-uppercase background-white" href="tel:0800040800">
                      0800 840 800
                      <i className="fa-sharp fa-solid fa-phone"></i>
                  </a>
                  (appel gratuit)
              </p>
            </div>
          </div>
        </section>
    );
}