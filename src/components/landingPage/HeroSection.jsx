import Image from "next/image";
import HeroMockup from "../../../public/assets/hero-mockup.png";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className=" text-white py-16">
      <div className=" flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight flex flex-wrap items-center">
            Prioritizing your <br />
            <div>
              financial{"                                 "}
              <span className="relative h-12 w-40 overflow-hidden text-white inline-flex items-center justify-center align-middle">
                <span className="absolute w-full text-center animate-[scrollUp_3s_infinite] whitespace-nowrap">
                  <span className="block text-4xl leading-tight font-black bg-gradient-to-r from-pink-500 to-purple-700  bg-clip-text text-transparent">
                    health.
                  </span>
                  <span className="block text-4xl leading-tight font-black bg-gradient-to-r  from-yellow-400 to-yellow-600  bg-clip-text text-transparent">
                    freedom
                  </span>
                  <span className="block text-4xl leading-tight font-black bg-gradient-to-r  from-blue-500 to-purple-600 s   bg-clip-text text-transparent">
                    growth.
                  </span>
                </span>
              </span>
            </div>
          </h1>
          <p className="mt-4 text-gray-300">
            Expensio is the personal financial navigator that empowers you to
            effortlessly track expenses, plan budgets, and manage debt.
          </p>
          <p className="mt-2 text-gray-400">
            Get 30 days free trial when you sign up.
          </p>

          <Button size="lg" className="py-4 my-4">
            Try Now
          </Button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={HeroMockup}
            alt="Expensio Dashboard"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
