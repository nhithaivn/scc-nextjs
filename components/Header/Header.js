import { Link } from "../../i18n";
import LocalePicker from "./LocalePicker";
import { withTranslation } from "../../i18n";
import { useRouter } from "next/router";
// import { media } from "./Styles/Media";

const Header = ({ t }) => {
  const { pathname } = useRouter();

  const buttons = [
    { path: "/", text: "homeMenu" },
    { path: "/about", text: "aboutMenu" },
    { path: "/classes", text: "classesMenu" },
    { path: "/pricing", text: "pricingMenu" },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <a href="" className="logo">
          <img src="/images/logo-climbing.png" alt="scc" />
        </a>
        <div className="menu-area">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <nav className="main-menu">
            <ul>
              {buttons.map((button) => (
                <Link key={button.text} href={button.path}>
                  <li>
                    <a className={pathname === button.path ? "active" : ""}>
                      {t(button.text)}
                    </a>
                  </li>
                </Link>
              ))}
            </ul>
            <LocalePicker />
          </nav>
        </div>
      </div>
      <style jsx>{`
        /* header */
        .site-header {
          background-color: #fff;
          box-shadow: 0.1rem 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          z-index: 3;
          height: 6rem;
          .main-menu {
            margin: 0;
            padding: 0;
            list-style: none;
            overflow: hidden;
            background-color: #fff;
            width: auto;
            -webkit-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
            z-index: 1000;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            left: 0;
            top: 7rem;
            width: 100%;
            a {
              display: block;
              padding: 2rem 2rem;
              border-right: 0.1rem solid #f4f4f4;
              text-decoration: none;
              &:hover {
                background-color: #f4f4f4;
              }
            }
          }
        }

        .site-header .menu-btn:hover {
          background-color: #f4f4f4;
        }
        .site-header .logo {
          height: 6rem;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          img {
            height: 100%;
            object-fit: contain;
          }
        }
        /* menu */
        .site-header .menu-area {
          margin-left: auto;
        }
        .site-header .main-menu {
          clear: both;
          max-height: 0;
          transition: max-height 0.2s ease-out;

          ul:first-child {
            width: 100%;
            margin-right: 0; 
          }
        }

        /* menu icon */
        .site-header .menu-icon {
          cursor: pointer;
          display: inline-block;
          padding: 2.8rem 2rem;
          position: relative;
          user-select: none;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
        }

        .site-header .menu-icon .navicon {
          background: #333;
          display: block;
          height: 0.2rem;
          position: relative;
          transition: background 0.2s ease-out;
          width: 1.8rem;
        }

        .site-header .menu-icon .navicon:before,
        .site-header .menu-icon .navicon:after {
          background: #333;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          transition: all 0.2s ease-out;
          width: 100%;
        }

        .site-header .menu-icon .navicon:before {
          top: 0.5rem;
        }

        .site-header .menu-icon .navicon:after {
          top: -0.5rem;
        }

        /* menu btn */

        .site-header .menu-btn {
          display: none;
        }

        .site-header .menu-btn:checked ~ .main-menu {
          max-height: 24rem;
        }

        .site-header .menu-btn:checked ~ .menu-icon .navicon {
          background: transparent;
        }

        .site-header .menu-btn:checked ~ .menu-icon .navicon:before {
          transform: rotate(-45deg);
        }

        .site-header .menu-btn:checked ~ .menu-icon .navicon:after {
          transform: rotate(45deg);
        }

        .site-header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
        .site-header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
          top: 0;
        }
        @media (min-width: 768px) {
          .site-header {
            height: 8rem;
          }
          .site-header .logo {
            a {
              height: 8rem;
            }
          }
          .site-header li {
            float: left;
          }
          .site-header li a {
            padding: 2rem 3rem;
          }
          .site-header .main-menu {
            clear: none;
            max-height: none;
            height: 8rem;
            position: relative;
            top:0;
            ul:first-child {
            margin-right: 10rem; 
            }
          }
          .site-header .menu-icon {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Header);
