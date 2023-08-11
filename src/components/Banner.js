import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col">
          <h1>
            <span>Rent</span> Your Dream House With Us.
          </h1>
          <p>lorem asbafkjf asfbakfjb sjakjfh jsafkf jkscaf kjsaihsf kjasfhaihf kjbsbfcahufd kjasfbhiauf kjshdcdais bjkafbb jabfa jbfci hbgscf shcifu </p>
        </div>
        <div>
          <img src={Image} alt=""/>
        </div>
      </div>
      <Search/>
    </section>
  );
};

export default Banner;
