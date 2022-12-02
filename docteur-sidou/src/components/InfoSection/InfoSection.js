export const InfoSection = () => {
    return (
        <section className="grid margin text-center">
          <a href="about-sida.html" className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-red">
            <i className="icon-sli-equalizer text-size-60 text-white center margin-bottom-15"></i>
            <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">Le Sida, parlons en!</h3>
          </a>
          <a href="services.html" className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-blue">
            <i className="icon-sli-layers text-size-60 text-white center margin-bottom-15"></i>
            <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">Lien utile</h3>
          </a>

          <img className="m-12 l-6 l-row-2 margin-bottom" src="img/sida2.jpg"/>

          <a href="contact.html" className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-orange">
              <i className="icon-sli-share text-size-60 text-white center margin-bottom-15"></i>
              <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">Contactez-nous</h3>
          </a>
          <a href="sidada.html" className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-aqua">
              <i className="icon-sli-diamond text-size-60 text-white center margin-bottom-15"></i>
              <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">Sidada</h3>
          </a>
        </section>
    );
}