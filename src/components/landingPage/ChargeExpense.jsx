import Image from "next/image";
import HeroMockup from "../../../public/assets/hero-mockup.png";
import LP_Exp_Analysis from "../../../public/assets/LP_Exp_Analysis.png";
import LP_Form from "../../../public/assets/LP_Form.png";
import LP_Cal from "../../../public/assets/LP_Cal.png";
import { Button } from "../ui/button";

const ChargeExpense = () => {
  return (
    <section className=" text-white py-16">
      <div className=" flex flex-col items-center justify-between">
        <div className="md:w-full items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Take Charge of <br />
            <div>
              your {"              "}
              <span className=" text-5xl leading-tight font-black bg-gradient-to-r  from-blue-500 to-purple-600 s   bg-clip-text text-transparent">
                expenses.
              </span>
            </div>
          </h1>

          <p className="mt-4 text-white-300">
            Managing your fianances doesn't have to be overwhelming.
          </p>
        </div>
        <div className="w-full">
          <div className="h-64 w-1/2 ml-[90] mt-[150]">
            <div className="  bg-clip-padding backdrop-filter backdrop-blur-md">
              <div className="bg-clip-padding backdrop-filter  rounded-md bg-gradient-to-r  from-[#5b44bd] via-[#8d75ba] to-[#37315e] h-48  w-[660]  flex justify-center items-center ">
                <p className="mt-2 text-white-10">
                  Trakfundz makes tracking your spending <br /> easy and
                  efficent, helping you identify <br /> areas where you can
                  save.
                </p>
                <Image
                  src={LP_Exp_Analysis}
                  alt="Expensio Dashboard"
                  width={170}
                  height={120}
                  className="rounded-lg absolute -bottom-10 -right-24 "
                />
                <Image
                  src={LP_Form}
                  alt="Expensio Form"
                  width={150}
                  height={150}
                  className="rounded-lg absolute -top-14 -right-24  "
                />
                <Image
                  src={LP_Cal}
                  alt="Expensio Cal"
                  width={110}
                  height={120}
                  className="rounded-lg absolute -top-14 -left-20 bg-opacity-125"
                />
              </div>
            </div>
          </div>

          <p className="mt-2 ml-10 text-white-10">
            Sign up to track your expenses and get a clear <br /> picture of
            where your money is going.
          </p>
          <Button size="lg" className="py-4 mx-10 my-4">
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChargeExpense;
