import { i18n, config } from "../../i18n";
import { I18nContext } from "next-i18next";
import { useContext } from "react";

const LocalePicker = () => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <ul className="lang-menu" position="right">
      {config.allLanguages.map((locale) => (
        <li
          className={locale === language? 'active': ''}
          key={locale}
          onClick={() => i18n.changeLanguage(locale)}
        >
          {` ${locale.toUpperCase()}`}
        </li>
      ))}
       <style jsx>{`
         .lang-menu {
           display: inline-flex;
          position: absolute;
          right: 0;
            li {
              padding: 0 0.5rem;
              &:first-child {
              border-right: 0.1rem solid #000;
            }
          }
         }`}</style>
    </ul>
  );
};

export default LocalePicker;
