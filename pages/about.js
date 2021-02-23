import { withTranslation } from "../i18n";
import HeroBanner from "../components/HeroBanner";

const About = ({ t }) => {
  return (
    <main>
       <HeroBanner />
     
      <h1>{t("common:about")}</h1>
      <div>{t("aboutMessage")}</div>
    </main>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["about", "common"],
});

export default withTranslation(["about", "common"])(About);
