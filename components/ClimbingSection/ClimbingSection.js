import { withTranslation } from "../../i18n";

const ClimbingSection = ({ t }) => {
  return (
    <section>
      <div className="container">
        <div className="cta__wrap">
          <div className="cta__box">
            <a href="" className="cta cover-bg bg--black colour--white">
              <img className="cover-bg__img" src="/images/boudering.jpg" alt="boudering" />
              <div className="cta__inner">
                <p className="h2 cta__title">
                  LEAD <span>CLIMBING</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                  Leo tự do, leo đến đâu móc rope đến đó
                </p>
              </div>
            </a>
          </div>
          <div className="cta__box">
            <a href="" className="cta cover-bg bg--black colour--white">
              <img className="cover-bg__img" src="/images/toprope.jpg" alt="toprope" />
              <div className="cta__inner">
                <p className="h2 cta__title">
                  TOP <span>ROPE</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                  Leo núi tường cao, leo tốc độ
                </p>
              </div>
            </a>
          </div>
          <div className="cta__box">
            <a href="" className="cta cover-bg bg--black colour--white">
              <img className="cover-bg__img" src="/images/lead-climbing.jpg" alt="lead-climbing" />
              <div className="cta__inner">
                <p className="h2 cta__title">
                  BOULDERING/<span>TRAVERSING</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                  Leo núi tường thấp(có nệm lót), leo núi kỹ thuật
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: #fff;
          position: relative;
        }
        .cta {
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: 100%;
        }
        .cta:hover .cta__hover {
          opacity: 1;
        }
        .cta__wrap {
          text-align: center;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
          grid-gap: 2.5rem;
          width: 100%;
        }
        .cta__box {
          position: relative;
        }
        .cta__hover,
        .cta__inner {
          position: absolute;
          padding: 1.875rem;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 1039px) {
          .cta__inner {
            z-index: 1;
            background: transparent;
            pointer-events: none;
          }
        }
        .cta__hover {
          background: rgba(0,0,0,.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity .4s cubic-bezier(.25,.46,.45,.94);
        }
        @media (max-width:1039px) {
          .cta__hover {
            background: rgba(0, 0, 0, .5);
            opacity: 1;
            text-align: left!important;
            align-items: flex-start;
            justify-content: flex-end
          }
        }
        .cta__inner--center {
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @media (min-width: 1201px) {
          .cta__inner--center {
            padding: 1.875rem 3.75rem;
          }
        }

        @media (max-width: 1039px) {
          .cta__inner--center {
            padding: 3rem;
            background: rgba(0, 0, 0, 0.4);
          }
        }

        @media (max-width: 1039px) {
          .cta__inner--center .cta__title {
            margin-bottom: 2rem;
          }
        }
        .cover-bg {
          position: relative;
          color: #ffffff;
        }

        .cover-bg__img {
          left: 0;
          height: 100%;
          position: absolute;
          object-fit: cover;
          object-position: center;
          top: 0;
          width: 100%;
          z-index: 0
        }
        .cta__hover-title {
          display: block;
          padding: 0;
          font-size: 2rem;
        }

        .cta__hover-title {
          width: 100%;
        }

        .cta__hover-title span {
          color: #ffffff;
        }

        .cta__title {
          font-size: 3.2rem;
          color: #ffffff;
          line-height: 2.98913rem;
          display: block;
          padding: 0;
          letter-spacing: .0625rem;
          line-height: 3.4375rem;
          text-transform: uppercase;
          margin: 0;
        }

        @media (max-width:1039px) {
          .cta__title {
            font-size: 1.875rem;
            line-height: 1.71875rem;
          }
        }

        @media (max-width:749px) {
          .cta__title {
            font-size: 3.26087rem;
            line-height: 2.98913rem;
          }
        }

        @media (min-width:1041px) {
          .cta__title span {
            display: block;
            text-indent: 2.5rem;
          }
        }
        
      `}</style>
    </section>
  );
};

ClimbingSection.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(ClimbingSection);
