import Image from "next/image";
import { useEffect, useState } from "react";

const CategoryList = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    setActiveCategory(null);
    setActiveCategory(categories[0]);
  }, [categories]);

  return (
    <>
      <div className="w-full flex justify-between items-center flex-wrap mb-8 gap-2">
        {categories.map((category) => (
          <div
            onClick={() => setActiveCategory(category)}
            key={category.id}
            className={`${
              activeCategory.id === category.id
                ? "bg-primary text-white"
                : "bg-white text-black"
            } w-36 md:w-56 px-6 py-4 relative cursor-pointer hover:bg-primary hover:text-white transition-all duration-500`}
          >
            <h3 className="text-lg md:text-xl font-medium uppercase text-center">
              {category.name}
            </h3>
            {activeCategory.id === category.id && (
              <div className="hidden md:block absolute h-0 w-0 border-[1rem_1rem_0_1rem] border-transparent border-t-primary left-1/2 -bottom-4 -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white p-6">
        {activeCategory.colors.map((color) => (
          <div
            key={color.id}
            className="w-full p-6 border border-primary rounded-lg flex flex-col justify-center items-center"
          >
            <p className="md:text-lg font-light uppercase mb-6 tracking-wide border-b border-b-slate-700">
              {color.type}
            </p>
            {color.name.map((n, i) => (
              <p
                key={i}
                className="text-lg md:text-xl font-semibold mb-2 p-0 text-center"
              >
                {n}
              </p>
            ))}

            {color.image && (
              <div
                className="relative w-40 h-40 rounded-full border-8 border-sky-100 overflow-hidden bg-cover bg-center mt-4"
                style={{
                  backgroundImage: `url(${color.image})`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
