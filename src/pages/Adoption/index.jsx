import { useEffect } from "react";

// Components
import CarouselDisplay from "../../utils/crousel.utils";
import SpeakersBox from "../../components/design/Cards/SpeakersBox";

// styles
import style from "./Speakers.module.css";
import sectionStyle from "../Section.module.css";

// assets
import Dog1 from "../../assets/dog1.jpeg";
import Dog2 from "../../assets/dog2.jpeg";
import Dog3 from "../../assets/dog3.jpeg";
import Dog4 from "../../assets/dog4.jpeg";
import Dog5 from "../../assets/dog5.jpeg";
import Dog6 from "../../assets/dog6.jpeg";

/**
 *
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns The Speakers page
 */
const Adoption = () => {
  const responsive = [3, 2, 1];

  useEffect(() => {
    document.title = "Pawsible";
  }, []);

  const data = [
    {
      Name: "Rio",
      description:
        'The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose.',
      key: 0,
      img_path: Dog1,
    },
    {
      Name: "Ruby",
      description:
        'The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose.',
      key: 0,
      img_path: Dog2,
    },
    {
      Name: "Sandy",
      description:
        'The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose.',
      key: 0,
      img_path: Dog3,
    },
    {
      Name: "Bujji",
      description:
        'The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose.',
      key: 0,
      img_path: Dog4,
    },
    {
      Name: "Tommy",
      description:
        'The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose.',
      key: 0,
      img_path: Dog5,
    },
    {
      Name: "Jimmy",
      description:
        'The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose.',
      key: 0,
      img_path: Dog6,
    },
  ];

  return (
    <main className={style.container}>
      <div className={sectionStyle.title}>ADOPTION</div>
      <CarouselDisplay responsiveInput={responsive}>
        {data.map((box) => (
          <SpeakersBox
            name={box.Name}
            image={box.img_path}
            key={box.key}
            description={box.description}
          />
        ))}
      </CarouselDisplay>
    </main>
  );
};

export default Adoption;
