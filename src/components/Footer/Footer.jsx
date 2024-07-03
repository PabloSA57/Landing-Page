import {ReactSVG} from "react-svg";
import style from "./style.module.css";
import logo from "../../images/logo-bookmark.svg";
import i_fb from "../../images/icon-facebook.svg";
import i_tw from "../../images/icon-twitter.svg";

const links = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo_links}>
        <ReactSVG
          src={logo}
          beforeInjection={(svg) => {
            svg.classList.add("svg-logo");
          }}
          className={style.logo}
        />

        <ul className={style.nav}>
          {links.map((link) => (
            <li className={style.nav_item} key={link.name}>
              <a className={style.nav_link} href="/#">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.redes}>
        <a href="">
          <ReactSVG src={i_fb} className={style.svg} />
        </a>

        <a href="">
          <ReactSVG src={i_tw} className={style.svg} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
