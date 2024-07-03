import Accordion from "../ui/Accordion/Accordion";
import Button from "../ui/Button/Button";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import style from "./style.module.css";
const Asked = () => {
  return (
    <section className={style.asked}>
      <SectionTitle
        title="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us."
      />

      <div className={style.asked_content}>
        <Accordion
          title="What is Bookmark?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        />
        <Accordion
          title="How can I request a new browser?"
          description="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        />
        <Accordion
          title="Is there a mobile app?"
          description="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum."
        />
        <Accordion
          title="What about other Chromium browsers?"
          description="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
        />
      </div>

      <div className={style.btn}>
        <Button>More Info</Button>
      </div>
    </section>
  );
};

export default Asked;
