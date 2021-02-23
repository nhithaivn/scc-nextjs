import { withTranslation } from "../../i18n";

const HeroBanner = (props) => {
  const { title, description, imgSrc } = props;

  return (
    <div className="hero-banner">
      <img
        className="hero-banner__bg"
        src={imgSrc}
        alt="hero banner"
      />
      <img
        className="hero-banner__strip hero-banner__strip--alt"
        src="/images/bottom-banner.svg"
        alt="banner"
      />
      <img
        className="hero-banner__strip hero_banner__strip--foreground"
        src="/images/bottom-banner2.svg"
        alt="banner"
      />
      <div className="container-inner">
        {title && <h3>{title}</h3>}
        {description && <button> {description}</button>
        }
      </div>

      <style jsx>{`
        .hero-banner {
          background: #1e2428;
          height: 85vh;
          min-height: 38.75rem;
          position: relative;
          width: 100%;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          padding-top: 9rem;
          padding-bottom: 7.5rem;
        }

        @media (min-width: 751px) {
          .hero-banner {
            align-items: center;
            padding-top: 9rem;
            height: 100vh;
            min-height: 45rem;
            padding-bottom: 20rem;
          }
        }

        @media (min-width: 861px) {
          .hero-banner {
            padding-bottom: 15rem;
          }
        }

        .hero-banner__bg {
          opacity: 0.7;
          left: 0;
          height: 100%;
          position: absolute;
          object-fit: cover;
          object-position: center;
          top: 0;
          width: 100%;
          max-width: 100%;
          border: 0;
          display: block;
          height: 100%;
          max-width: 100%;
          z-index: 0;
        }
        .hero-banner__strip {
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 250rem;
          height: 13rem;
          object-fit: cover;
        }

        @media (max-width: 859px) {
          .hero-banner__strip {
            width: 200%;
            height: 8rem;
          }
        }

        @media (max-width: 749px) {
          .hero-banner__strip {
            width: 400%;
            height: 8rem;
          }
        }

        .hero-banner__strip .polymorph {
          fill: #fff;
        }

        .hero-banner__strip--alt {
          bottom: -5rem;
          height: 27rem;
          filter: invert(0.9);
          overflow: hidden;
          max-width: initial;
        }
        .hero_banner__strip--foreground {
          filter: invert(1);
          overflow: hidden;
          max-width: initial;
        }

        @media (max-width: 749px) {
          .hero-banner__strip--alt {
            height: 18rem;
            transform: translateX(-37%);
          }
        }

        .hero-banner__strip--alt .polymorph {
          fill: #ececec;
        }

        .hero-banner__strip--black .polymorph {
          fill: #1e2428;
        }

        .hero-banner__strip--grey .polymorph {
          fill: #959698;
        }
      `}</style>
    </div>
  );
};

HeroBanner.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation(["common", "home"])(HeroBanner);
