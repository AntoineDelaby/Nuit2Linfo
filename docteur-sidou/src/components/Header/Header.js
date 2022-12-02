import logo from '../../resources/images/logo.png';

export const Header = () => {
    return (
        <header className="grid">
        <nav className="s-12 grid background-none background-primary-hightlight">
           <a href="index.html" className="m-12 l-3 padding-2x logo">
              <img src={logo} />
           </a>
           <div className="top-nav s-12 l-9">
              <ul className="top-ul right chevron">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="about-sida.html">Le Sida, parlons en!</a></li>
                <li><a href="services.html">Lien utils</a></li>
                <li><a href="contact.html">Contactez-nous</a></li>
                <li><a href="sidada.html">Sidada</a></li>
              </ul>
           </div>
        </nav>
      </header>
    );
}