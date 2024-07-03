import hero from "../../images/illustration-hero.svg";
import Button from "../ui/Button/Button";
import style from "./style.module.css";

const Hero = () => {
  return (
    <section className={style.hero}>
      <figure className={style.figure}>
        <img src={hero} alt="" />
        <div className={style.design}></div>
      </figure>

      <div className={style.content}>
        <h1>A Simple Bookmark Manager</h1>

        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className={style.buttons}>
          <Button>Get it on Chrome</Button>
          <Button variant="tertiary">Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
