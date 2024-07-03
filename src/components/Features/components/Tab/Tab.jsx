import {useState} from "react";
import style from "./style.module.css";
import illu_tab_1 from "../../../../images/illustration-features-tab-1.svg";
import illu_tab_2 from "../../../../images/illustration-features-tab-2.svg";
import illu_tab_3 from "../../../../images/illustration-features-tab-3.svg";
import Button from "../../../ui/Button/Button";

const CONTENT_TAB = {
  0: {
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: illu_tab_1,
  },
  1: {
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: illu_tab_2,
  },
  2: {
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: illu_tab_3,
  },
};

const Tab = () => {
  const [tabActive, setTabActive] = useState(0);
  const content = CONTENT_TAB[tabActive];
  const handleTab = (n) => {
    if (tabActive === n) return;
    setTabActive(n);
  };
  return (
    <section className={style.tab}>
      <header className={style.tab_header}>
        <div
          className={`${style.tab_item} ${tabActive === 0 && style.active}`}
          onClick={() => handleTab(0)}
        >
          <span>Simple Bookmarking</span>
        </div>
        <div
          className={`${style.tab_item} ${tabActive === 1 && style.active}`}
          onClick={() => handleTab(1)}
        >
          <span>Speedy Searching</span>
        </div>
        <div
          className={`${style.tab_item} ${tabActive === 2 && style.active}`}
          onClick={() => handleTab(2)}
        >
          <span>Easy Sharing</span>
        </div>
      </header>

      <div className={style.tab_content}>
        <figure className={style.card_figure}>
          <img src={content.img} />
          <div className={style.design}></div>
        </figure>

        <div className={style.card_content}>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <Button>More info</Button>
        </div>
      </div>
    </section>
  );
};

export default Tab;
