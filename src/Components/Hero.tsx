import HeroCarousel from "./HeroCarousel";

const Hero = () => {
    return (
        <>
            <div className="w-full h-[80vh] phone:h-[50vh] bg-sky-200">
              <HeroCarousel/>
            </div>
        </>
    );
};

export default Hero;
