import sida1 from '../../resources/images/sida1.jpg';

export const Info2Section = () => {
    return (
        <section className="grid margin">
          <img className="s-12 m-6 margin-bottom" src={sida1} />

          <div className="s-12 m-6 padding-2x margin-bottom background-blue">
            <h2 className="text-strong text-size-50 text-line-height-1">TEXT</h2>
            <ul>
              <li>[text]</li>
            </ul>
          </div>
        </section>
    );
}