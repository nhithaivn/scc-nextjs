import { withTranslation } from "../i18n";
import HeroBanner from "../components/HeroBanner";
import ClimbingSection from "../components/ClimbingSection";

import { IntroVideoSection } from "../components/IntroVideoSection/IntroVideoSection";

const Home = ({ t }) => {
  return (
    <main className="site-main">
      <HeroBanner title={t("heroBannerText01")} description={t("heroBannerDescription01")} imgSrc="/images/hero-banner.jpg" />
      <ClimbingSection />  
      <IntroVideoSection
        source={'/images/climbing-video.mp4'}
        bgImage={'/images/poster.jpg'}
        />
      <style jsx>{`
        .site-main {
          display: block;
        }
      `}</style>
    </main>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["home"],
});

export default withTranslation("home")(Home);
