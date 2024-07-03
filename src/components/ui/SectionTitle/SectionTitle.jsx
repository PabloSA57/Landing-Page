/* eslint-disable react/prop-types */
import style from "./style.module.css";

const SectionTitle = ({ title, description }) => {
  return (
    <div className={`${style.content}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
