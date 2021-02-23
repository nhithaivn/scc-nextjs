import { withTranslation } from "../i18n";
import HeroBanner from "../components/HeroBanner";

const Pricing = ({ t }) => {
  return (
    <main>
       <HeroBanner />
     
      <h1>Pricing</h1>
    </main>
  );
};

Pricing.getInitialProps = async () => ({
  namespacesRequired: ["pricing", "common"],
});

export default withTranslation(["pricing", "common"])(Pricing);
