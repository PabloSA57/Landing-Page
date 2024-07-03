import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Tab from "./components/Tab/Tab";
import style from "./style.module.css";

const Features = () => {
  return (
    <section className={style.features} id="Features">
      <SectionTitle
        title="Features"
        description="Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go."
      />
      <Tab />
    </section>
  );
};

export default Features;
