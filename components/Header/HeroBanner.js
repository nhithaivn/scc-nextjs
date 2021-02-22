import { i18n, config } from "../../i18n";
import { I18nContext } from "next-i18next";
import { useContext } from "react";
import { withTranslation } from "../../i18n";

const HeroBanner = () => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <picture className="hero-banner">
      <source media="(min-width:650px)" srcSet="/images/hero-banner.jpg" />
      <source media="(min-width:465px)" srcSet="/images/hero-banner.jpg" />
      <img src="/images/hero-banner.jpg" alt="Flowers" />
       <style jsx>{`
         .hero-banner {
          img {
            backface-visibility: hidden;
            transform: translateY(0px);
            opacity: 0.7;
            left: 0;
            height: 100%;
            position: absolute;
            object-fit: cover;
            object-position: center;
            top: 0;
            width: 100%;
            z-index: 0;
          }
         }`}</style>
    </picture>
  );
};

HeroBanner.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(HeroBanner);