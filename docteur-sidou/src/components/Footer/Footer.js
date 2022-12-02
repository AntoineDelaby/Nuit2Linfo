import edn from '../../resources/images/edn.png';
import wenov from '../../resources/images/wenov.jpg';

export const Footer = () => {
    return(
        <footer className="grid">
        <div className="s-12 l-3 m-row-3 margin-bottom background-image" style={{backgroundImage:`url(${edn})`}}></div>
        <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
           <h2 className="text-strong text-uppercase">Qui sommes nous?</h2>
           <p>BLABLABLA</p>
        </div>
        <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
           <h2 className="text-strong text-uppercase">Ou sommes nous??</h2>
           <img className="full-img" src={wenov} alt=""/>
            <p className="right">177 All. Clémentine Deman, 59000 Lille</p>
        </div>
        <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
           <h2 className="text-strong text-uppercase">Contactez-nous</h2>
           <p><b className="text-primary margin-right-10">Bla?</b>BLABLABLA</p>
        </div>
        <div className="s-12 text-center margin-bottom">
          <p className="text-size-12">Copyright 2022, DBD'S</p>
        </div>
      </footer>
    );
}