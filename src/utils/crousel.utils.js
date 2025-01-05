import Carousel from "react-multi-carousel";

// styles
import "react-multi-carousel/lib/styles.css";

/**
 *
 * @param {Array} responsiveInput (should of size 3) accepts the number of items to be shown in the carousel according to different responsiveInput values
 * @param {JSX Element} children accepts the children of the CarouselDisplay element
 * @param {Boolean} swipeable accepts the carousel to be swipable or not. Default value is true
 * @param {Boolean} draggable accepts the carousel to be draggable or not. Default value is true
 * @param {Boolean} arrows accepts the carousel to show arrows or not. Default value is true
 * @param {Boolean} showDots accepts the carousel to show dots or not. Default value is true
 * @param {Boolean} infinite accepts the carousel items to be inifinite. Default value is true
 * @param {Boolean} autoPlay accepts the carousel items to be on autoplay. Default value is true
 * @param {Number} autoPlaySpeed accepts the speed of autoplay. Default value is 3000
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns Carousel element with the given properties
 */
const CarouselDisplay = ({
  responsiveInput,
  slidesToSlide = 1,
  children,
  swipeable = false,
  draggable = false,
  arrows = true,
  showDots = false,
  infinite = true,
  autoPlay = true,
  autoPlaySpeed = 2000,
}) => {
  const responsive={
    desktop: {
        breakpoint: { max: 3000, min: 1025 },
        items: responsiveInput[0],
        slidesToSlide: slidesToSlide,
        // make this ^ 5 if the images are the way that you mentioned
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: responsiveInput[1],
        slidesToSlide: slidesToSlide
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: responsiveInput[2],
        slidesToSlide: slidesToSlide
    }
};

  return (
    <Carousel
      responsive = {responsive}
      swipeable = {swipeable}
      draggable = {draggable}
      arrows = {arrows}
      infinite = {infinite}
      showDots = {showDots}
      autoPlay = {autoPlay}
      autoPlaySpeed = {autoPlaySpeed}
      style={{height: "100% !important", paddingTop: "2rem !important"}}
    >
      {children}
    </Carousel>
  );
};

export default CarouselDisplay;
