import { withTranslation } from "../i18n";
import HeroBanner from "../components/Header/HeroBanner";

const Home = ({ t }) => {
  return (
    <main className="site-main">
      <HeroBanner />
      <section>
      <h1>{t("home")}</h1>
      <div>{t("welcomeMessage")}</div>
      </section>
    </main>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
