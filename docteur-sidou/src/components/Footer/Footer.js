import edn from '../../resources/images/edn.png';
import wenov from '../../resources/images/wenov.jpg';
import { Images } from '../Images/Images';
import { Title2 } from '../Titles/Title2';

export const Footer = () => {
    return(
      <footer className="grid">
         <div className="s-12 l-3 m-row-3 margin-bottom background-image" style={{backgroundImage:`url(${edn})`}}></div>
         <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
            <Title2 classname="text-strong text-uppercase" content='Qui sommes-nous ?' />
            <p>BLABLABLA</p>
         </div>
         <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
            <Title2 classname="text-strong text-uppercase" content='Où sommes-nous ?' />
            <Images classname="full-img" link={wenov} alt="" /> 
            <p className="right">177 All. Clémentine Deman, 59000 Lille</p>
         </div>
         <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
            <Title2 classname="text-strong text-uppercase" content='Contactez-nous ?' />
            <p><b className="text-primary margin-right-10">Bla?</b>BLABLABLA</p>
         </div>
         <div className="s-12 text-center margin-bottom">
            <p className="text-size-12">Copyright 2022, DBD'S</p>
         </div>
      </footer>
    );
}