// import React, { useEffect, useRef } from "react";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import $ from "jquery";

// interface OwlCarouselProps {
//   options?: object;
// }

// const OwlCarousel: React.FC<OwlCarouselProps> = ({ options, children }) => {
//   const owlCarouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!owlCarouselRef.current) return;

//     $(owlCarouselRef.current).owlCarousel({
//       ...options,
//     });

//     // Cleanup function to destroy the Owl Carousel instance when component unmounts
//     return () => {
//       $(owlCarouselRef.current!).trigger("destroy.owl.carousel");
//     };
//   }, [options]);

//   return <div ref={owlCarouselRef}>{children}</div>;
// };

// export default OwlCarousel;
