import { cn } from "@/lib/utils";
import { CircleCheck, Soup } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const inter = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <div className={cn(inter.className, "text-black bg-white")}>
      <section
        className="md:pl-16 pt-[150px] md:pb-[300px] pl-4 grid grid-cols-12 bg-no-repeat bg-right-top bg-[url('https://qlub.io/wp-content/uploads/2023/05/intro-bg-responsive.webp')]"
        style={{ backgroundSize: "33%" }}
      >
        <div className="flex flex-col md:col-span-7 col-span-12">
          <p className="md:text-5xl text-2xl font-bold xs:w-60">
            The Fastest Payment For
          </p>
          <p className="md:text-3xl text-2xl md:pb-8 pb-7 font-bold text-yellow-500 xs:w-60">
            Restaurants, Lounges, Cafes, Bars
          </p>
          <p className="md:text-lg md:pb-8 pb-6 md:font-semibold xs:text-sm">
            Imagine guests can view your menu and pay for meals in one
            split-second scan.
          </p>
          <ul className="grid grid-cols-2 gap-3 pb-8 xs:text-sm">
            <li className="flex">
              <CircleCheck size={24} fill="purple" color="white" />
              <span>Turn tables quicker</span>
            </li>
            <li className="flex">
              <CircleCheck size={24} fill="purple" color="white" />
              <span>Earn more tips</span>
            </li>
            <li className="flex">
              <CircleCheck size={24} fill="purple" color="white" />
              <span>Swift, secure payments</span>
            </li>
            <li className="flex">
              <CircleCheck size={24} fill="purple" color="white" />
              <span>No app, no registration</span>
            </li>
          </ul>
          <div className="flex md:pt-3">
            <button className="rounded-full bg-purple-700 text-white md:px-8 md:py-4 px-4 py-2 xs:text-sm">
              Book a Demo
            </button>
          </div>
        </div>
        <div className="md:col-span-5"></div>
      </section>
      <section>
        <p className="md:text-3xl font-semibold text-center md:pt-16 md:pb-16 pt-8 pb-8 text-2xl">
          Trusted by{" "}
          <span className="bg-gradient-to-b from-transparent to-yellow-500">
            fantastic
          </span>{" "}
          restaurants like yours
        </p>
      </section>
      <section className="flex flex-col bg-yellow-500 pt-16 pb-20">
        <p className="md:text-3xl text-2xl text-center md:font-semibold font-medium pb-16">
          Give insanely good <br /> dine-in{" "}
          <Soup
            size={32}
            color="purple"
            style={{ display: "inline" }}
            className="rotate-12"
          />{" "}
          experiences
        </p>
        <ul className="md:text-2xl text-xl grid grid-cols-2 md:grid-cols-4 md:py-5 font-medium text-center">
          <li className="px-3 xs:pb-8">
            Save <span className="md:text-5xl text-3xl font-bold">16</span> min
            per <br />
            table
          </li>
          <li className="px-3">
            Earn <span className="md:text-5xl text-3xl font-bold">300%</span>{" "}
            <br />
            more tips
          </li>
          <li className="px-3">
            Get <span className="md:text-5xl text-3xl font-bold">7x</span>{" "}
            positive <br />
            Google reviews
          </li>
          <li className="px-3">
            Offer <span className="md:text-5xl text-3xl font-bold">100%</span>{" "}
            <br />
            customer happiness
          </li>
        </ul>
      </section>
      <section
        className="flex md:flex-row flex-col bg-no-repeat pt-24 bg-left bg-[url('https://qlub.io/wp-content/themes/qlub/images/experience.svg')]"
        style={{ backgroundSize: "13%" }}
      >
        <video
          src="https://qlub.io/wp-content/uploads/2022/10/Pay.mp4"
          muted
          loop
          className="max-w-80 p-8 md:ml-16 md:self-start self-center md:rounded-[73px] md:h-[554px] h-[400px] rounded-[55px]"
        />
        <div className="p-8">
          <p className="text-center md:text-3xl text-2xl font-bold md:text-justify">
            The payment experience <br />
            today&apos;s guests are{" "}
            <span className="bg-gradient-to-b from-transparent to-yellow-500">
              craving
            </span>
          </p>
          <ul className="pt-16 flex text-2xl md:text-3xl place-self-start">
            <li className="mr-6 text-purple-200">SCAN.</li>
            <li className="mr-6 text-purple-200">SPLIT.</li>
            <li className="mr-6 text-purple-200">TIP.</li>
            <li className="mr-6 text-purple-700">PAY.</li>
          </ul>
          <p className="md:text-lg text-justify pt-8">
            Instant payments with Apple Pay, Google Pay, or any local or
            international debit or credit card.
          </p>
          <div className="flex justify-center md:justify-start pt-8">
            <button className="rounded-full text-purple-700 border-purple-700 border-2 bg-white md:px-8 md:py-4 px-4 py-2 xs:text-sm">
              Request a Demo{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-8 items-center bg-purple-200">
        <p className="text-center md:text-3xl text-2xl font-bold md:text-justify">
          Be flexible in accepting payments
        </p>
        <p className="md:text-lg text-justify py-8 mx-8">
          There&apos;s an option for every customer. qlub works with the
          world&apos;s leading payment partners
        </p>
        <div className="flex flex-row pb-8">
          <Image
            src="/qlub-clone/visa.png"
            alt="Visa"
            className="xs:w-[90px] xs:h-[42px]"
            width={90}
            height={42}
          />
          <Image
            src="/qlub-clone/master-card.png"
            alt="Master Card"
            className="xs:w-[90px] xs:h-[42px]"
            width={90}
            height={42}
          />
          <Image
            src="/qlub-clone/American-Express.png"
            alt="American Express"
            className="xs:w-[90px] xs:h-[42px]"
            width={90}
            height={42}
          />
        </div>
      </section>
    </div>
  );
}
