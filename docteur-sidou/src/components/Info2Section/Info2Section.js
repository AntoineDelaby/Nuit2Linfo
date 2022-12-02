import sida1 from '../../resources/images/sida1.jpg';
import { Images } from '../Images/Images';
import { Title2 } from '../Titles/Title2';

export const Info2Section = () => {
    return (
        <section className="grid margin">
          <Images classname={'s-12 m-6 margin-botto'} src={sida1} alt={''} />

          <div className="s-12 m-6 padding-2x margin-bottom background-blue">
            <Title2 classname={"text-strong text-size-50 text-line-height-1"} content="TEXT" />
            <ul>
              <li>[text]</li>
            </ul>
          </div>
        </section>
    );
}