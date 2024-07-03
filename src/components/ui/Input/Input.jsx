/* eslint-disable react/prop-types */
import {ReactSVG} from "react-svg";
import style from "./style.module.css";
import i_error from "../../../images/icon-error.svg";

const Input = ({error, onChange, ...props}) => {
  return (
    <div className={style.input}>
      <input
        className={`${error && style.error}`}
        {...props}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <ReactSVG src={i_error} className={style.svg} />}

      {error && <div className={style.msg_error}>{error.msg}</div>}
    </div>
  );
};

export default Input;
