import { Title3 } from "../Titles/Title3";

export const ReseauSection = () => {
  return(
      <section className="grid margin text-center">
        <div className="m-12 l-4 padding-2x background-dark margin-bottom text-right">
            <Title3 classname={"text-strong text-size-25 text-uppercase margin-bottom-10"} content={"Gardons le contact"} />
          <p>Besoin de plus d'informations? restont en contact!</p>
        </div>
        <a target="_blank" href="https://www.facebook.com/UniversiteCatholiquedeLille/" className="s-12 m-6 l-2 padding vertical-center margin-bottom facebook hover-zoom">
           <i className="icon-sli-social-facebook text-size-60 text-white center"></i>
        </a>
        <a target="_blank" href="https://twitter.com/UnivCatholille?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="s-12 m-6 l-2 padding vertical-center margin-bottom twitter hover-zoom">
          <i className="icon-sli-social-twitter text-size-60 text-white center"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/univcatholille/?hl=fr" className="s-12 m-6 l-2 padding vertical-center margin-bottom instagram hover-zoom">
          <i className="icon-sli-social-instagram text-size-60 text-white center"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/school/universite-catholique-de-lille/?originalSubdomain=fr" className="s-12 m-6 l-2 padding vertical-center margin-bottom linkedin hover-zoom">
          <i className="icon-sli-social-linkedin text-size-60 text-white center"></i>
        </a>
      </section>
  );
}