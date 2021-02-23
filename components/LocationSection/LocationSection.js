import { withTranslation } from "../../i18n";

const LocationSecion = ({ t }) => {
 
  return (
    <section>
      <div className="container">
      Location
    
      </div>
      <style jsx>{``}</style>
    </section>
  );
};

LocationSecion.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(LocationSecion);
