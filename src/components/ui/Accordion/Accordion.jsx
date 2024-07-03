/* eslint-disable react/prop-types */
import style from "./style.module.css";
import i_arrow from "../../../images/icon-arrow.svg";
import { ReactSVG } from "react-svg";

const Accordion = ({ title, description }) => {
  return (
    <details className={`${style.accordion} accordion`}>
      <summary>
        <span>{title}</span>
        <ReactSVG
          src={i_arrow}
          beforeInjection={(svg) => {
            svg.classList.add("svg-arrow");
          }}
          className={style.svg}
        />
      </summary>

      <div className={style.content}>
        <p>{description}</p>
      </div>
    </details>
  );
};

export default Accordion;
