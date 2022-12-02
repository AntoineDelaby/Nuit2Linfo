import logo from '../../resources/images/logo.png';
import { Link } from "react-router-dom";
import { Images } from '../Images/Images';

export const Header = () => {
   const links = [
      [
         'index',
         'Accueil'
      ],
      [
         'about-sida',
         'Le Sida, parlons-en !'
      ],
      [
         'services',
         'Liens utiles'
      ],
      [
         'contact',
         'Contactez-nous'
      ],
      [
         'sidada',
         'Sidada'
      ]
   ]

    return (
        <header className="grid">
        <nav className="s-12 grid background-none background-primary-hightlight">
            <Link to={'index'} className="m-12 l-3 padding-2x logo">
               <Images classname={''} link={logo} alt='Logo ' />
            </Link>
           <div className="top-nav s-12 l-9">
              <ul className="top-ul right chevron">
                  {
                     links.map(link => {
                        <li>
                           <Link to={link[0]}>{link[1]}</Link>
                        </li>
                     })
                  }
              </ul>
           </div>
        </nav>
      </header>
    );
}