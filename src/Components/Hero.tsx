import HeroCarousel from "./HeroCarousel";

const Hero = () => {
    return (
        <>
            <div className="w-full h-max phone:h-[50vh]">
              <HeroCarousel/>
            </div>
        </>
    );
};

export default Hero;
