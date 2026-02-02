import React from "react";

const OurApproachSection = () => {
  const imagesSection = [
    { id: 1, url: "/approach1.png", alt: "img1" },
    { id: 2, url: "/approach2.png", alt: "img2" },
    { id: 3, url: "/approach3.png", alt: "img3" },
    { id: 4, url: "/approach4.png", alt: "img4" },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-4 mt-32 mb-56">
      <h1 className="text-black text-6xl font-medium font-LeagueSpartan-Light">
        OUR APPROACH TO FASHION DESIGN
      </h1>
      <div>
        {" "}
        <p className="text-lg text-black font-light max-w-2xl font-LeagueSpartan-Light">
          at elegant vogue , we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time each design
          is meticulously crafted, ensuring the highest quelity exqulsite finish
        </p>
      </div>
      <div className="flex justify-between gap-11 mt-28">
        {imagesSection.map((item) => {
          const isOdd = item.id % 2 !== 0;
          return (
            <div
              key={item.id}
              className={`transition-transform duration-500 ${isOdd ? "-translate-y-12" : "translate-y-12"}
              `}
            >
              <img
                src={item.url}
                alt={item.alt}
                width={260}
                height={360}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurApproachSection;
