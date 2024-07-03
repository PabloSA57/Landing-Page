/* eslint-disable react/prop-types */
import style from "./style.module.css";

const Button = ({ variant = "primary", children }) => {
  return (
    <button className={`${style.button} ${style[variant]}`}>{children}</button>
  );
};

export default Button;
