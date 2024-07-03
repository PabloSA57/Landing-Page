/* eslint-disable react/prop-types */
import style from "./style.module.css";
import i_close from "../../../../images/icon-close.svg";
import i_fb from "../../../../images/icon-facebook.svg";
import i_tw from "../../../../images/icon-twitter.svg";
import logo from "../../../../images/logo-bookmark.svg";
import {ReactSVG} from "react-svg";

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

const NavPhone = ({onClose}) => {
  return (
    <div className={style.nav_phone}>
      <header className={style.nav_phone_header}>
        <ReactSVG
          src={logo}
          beforeInjection={(svg) => {
            svg.classList.add("svg-logo");
          }}
        />
        <button className={style.btn_close} onClick={onClose}>
          <ReactSVG src={i_close} />
        </button>
      </header>
      <nav className={style.nav}>
        <ul className={style.nav_list}>
          {links.map((link) => (
            <li className={style.nav_item} key={link.name}>
              <a
                className={style.nav_link}
                onClick={onClose}
                href={`/#${link.name}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className={style.nav_item_login} key="login">
            <a className={style.nav_link_login} href="/#">
              Login
            </a>
          </li>
        </ul>
      </nav>

      <div className={style.redes}>
        <a href="">
          <ReactSVG src={i_fb} />
        </a>
        <a href="">
          <ReactSVG src={i_tw} />
        </a>
      </div>
    </div>
  );
};

export default NavPhone;
