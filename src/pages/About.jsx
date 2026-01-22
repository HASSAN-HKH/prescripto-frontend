import React from "react";
import about_image from "../assets/about_image.png";

const About = () => {
  return (
    <div className="about">
      <h2 className="text-center text-2xl py-10 text-[#707070] uppercase">
        About <span className="text-gray-700 font-semibold">Us</span>
      </h2>
      <section className="about-info flex flex-col gap-6 md:flex-row md:gap-12">
        <div className="image md:w-[360px]">
          <img src={about_image} alt="About" className="h-full" />
        </div>
        <div className="info flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <div className="vision">
            <h3 className="text-gray-800 font-bold mb-4">Our Vision</h3>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </section>
      <section className="why-us my-10">
        <h3 className=" uppercase text-xl my-4">
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </h3>
        <div className="features flex flex-col md:flex-row">
          <div className="feature1 border border-[#e5e7eb] px-10 py-8 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-(--color-primary) hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <h4 className=" uppercase font-bold">Efficiency:</h4>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="feature2 border border-[#e5e7eb] px-10  py-8 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-(--color-primary) hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <h4 className="uppercase font-bold">CONVENIENCE:</h4>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="feature3 border border-[#e5e7eb] px-10  py-8 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-(--color-primary) hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <h4 className="uppercase font-bold">PERSONALIZATION:</h4>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
