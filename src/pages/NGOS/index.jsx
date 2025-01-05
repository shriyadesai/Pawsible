import { useEffect } from "react";

// components
import CarouselDisplay from "../../utils/crousel.utils";

// styles
import style from "./Webinars.module.css";
import sectionStyle from "../Section.module.css";
import WebinarsBox from "../../components/design/Cards/WebinarsBox";

/**
 *
 * @returns The Webinars page
 * @author ammrit2312 <amriteshc101@icloud.com>
 */
const NGOS = () => {
  const responsive = [2, 2, 1];
  useEffect(() => {
    document.title = "Pawsible";
  }, []);

  const data = [
    {
      title: "Janani Chaithra",
      body: 'NO.8, NEAR BLOOMFIELD GARDEN BUS STOP, RAMACHANDRAPURA MAIN ROAD, VIDYARANYAPURA, BENGALURU560097',
      key: 1,
    },
    {
      title: "Vishal R",
      body: 'NO.8, NEAR BLOOMFIELD GARDEN BUS STOP, RAMACHANDRAPURA MAIN ROAD, VIDYARANYAPURA, BENGALURU560097',
      key: 2,
    },
    {
      title: "Prajwal K",
      body: 'NO.8, NEAR BLOOMFIELD GARDEN BUS STOP, RAMACHANDRAPURA MAIN ROAD, VIDYARANYAPURA, BENGALURU560097',
      key: 3,
    },
    {
      title: "Rahul B Nayaka",
      body: 'NO.8, NEAR BLOOMFIELD GARDEN BUS STOP, RAMACHANDRAPURA MAIN ROAD, VIDYARANYAPURA, BENGALURU560097',
      key: 4,
    },
    {
      title: "Preetham H S ",
      body: 'NO.8, NEAR BLOOMFIELD GARDEN BUS STOP, RAMACHANDRAPURA MAIN ROAD, VIDYARANYAPURA, BENGALURU560097',
      key: 5,
    },
  ];

  return (
    <main className={style.container}>
      <div className={sectionStyle.title}>NGOs</div>
      <CarouselDisplay responsiveInput={responsive}>
        {data.map((item) => (
          <WebinarsBox title={item.title} text={item.body} key={item.key} />
        ))}
      </CarouselDisplay>
    </main>
  );
};

export default NGOS;
