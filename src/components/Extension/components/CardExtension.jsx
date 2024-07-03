/* eslint-disable react/prop-types */
import Button from "../../ui/Button/Button";
import style from "./style.module.css";
import bg_dots from "../../../images/bg-dots.svg";
import {ReactSVG} from "react-svg";
const CardExtension = ({title, description, img, text_btn}) => {
  return (
    <figure className={style.card}>
      <img src={img} alt="" />
      <figcaption>
        <div className={style.card_content}>
          <h4>{title}</h4>
          <p>{description}</p>
          <ReactSVG src={bg_dots} className={style.svg} />
        </div>

        <Button>{text_btn}</Button>
      </figcaption>
    </figure>
  );
};

export default CardExtension;
