import "./Main.scss";
import { Video } from "../Video/Video.tsx";
import { Form } from "../Form/Form.tsx";
import { TextComponent } from "../TextComponent/TextComponent.tsx";
import { Slider } from "../Slider/Slider.tsx";

const slides = [
  "sliders/slide1.avif",
  "sliders/slide2.jpg",
  "sliders/slide3.avif",
  "sliders/slide4.jpeg",
  "sliders/slide5.avif",
];

export const Main = () => {
  return (
    <main className="main">
      <section className="main__section-top">
        <Video />
        <Form />
      </section>
      <TextComponent />
      <Slider slides={slides} />
    </main>
  );
};
