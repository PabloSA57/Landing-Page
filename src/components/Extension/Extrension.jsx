import style from "./style.module.css";
import logo_chrome from "../../images/logo-chrome.svg";
import logo_firefox from "../../images/logo-firefox.svg";
import logo_opera from "../../images/logo-opera.svg";
import CardExtension from "./components/CardExtension";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

const LIST_EXTENSIONS = [
  {
    id: 1,
    title: "Add to Chrome",
    description: "Minimum version 62",
    img: logo_chrome,
    text_btn: "Add & Install Extension",
  },
  {
    id: 2,
    title: "Add to Firefox",
    description: "Minimum version 55",
    img: logo_firefox,
    text_btn: "Add & Install Extension",
  },
  {
    id: 3,
    title: "Add to Opera",
    description: "Minimum version 46",
    img: logo_opera,
    text_btn: "Add & Install Extension",
  },
];

const Extension = () => {
  return (
    <section className={style.extension}>
      <SectionTitle
        title="Download the extension"
        description="We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize."
      />

      <div className={style.cards_container}>
        {LIST_EXTENSIONS.map(({ id, title, description, text_btn, img }) => (
          <CardExtension
            key={id}
            title={title}
            description={description}
            img={img}
            text_btn={text_btn}
          />
        ))}
      </div>
    </section>
  );
};

export default Extension;
