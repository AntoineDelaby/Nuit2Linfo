import { Link } from 'react-router-dom';
import sida2 from '../../resources/images/sida2.jpg';
import { Images } from '../Images/Images';
import { Title3 } from '../Titles/Title3';

export const InfoSection = () => {
    return (
        <section className="grid margin text-center">
          <Link to={'about-sida'} className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-red">
            <i className="icon-sli-equalizer text-size-60 text-white center margin-bottom-15"></i>
            <Title3 classname={"text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase"} content="Le Sida, parlons-en !" />
          </Link>

          <Link to={'service'} className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-blue">
            <i className="icon-sli-layers text-size-60 text-white center margin-bottom-15"></i>
            <Title3 classname={"text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase"} content="Liens utiles" />
          </Link>

          <Images classname={"m-12 l-6 l-row-2 margin-bottom"} link={sida2} alt='' />

          <Link to={'contact'} className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-orange">
              <i className="icon-sli-share text-size-60 text-white center margin-bottom-15"></i>
              <Title3 classname={"text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase"} content={'Contactez-nous'} />
          </Link>

          <Link to={'contact'} className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-orange">
          </Link>
          
          <Link to={'sidada'} className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-aqua">
              <i className="icon-sli-diamond text-size-60 text-white center margin-bottom-15"></i>
              <Title3 classname={'text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase'} content={'Sidada'} />
          </Link>
        </section>
    );
}