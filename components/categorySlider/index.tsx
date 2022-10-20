import React from "react";

import useGetCategories from "../../services/useGetCategories";

function CategorySlider() {
  const [loading, error, category] = useGetCategories();
  if (error) return <div className="font-extrabold text-xl text-red-500">{error}</div>;
  return (
    <div className="bg-white p-3">
      <div className="mt-3 flex flex-wrap gap-2">
        {category.map((c) => (
          <button
            key={c.id}
            className="bg-red-400 hover:bg-red-800 w-32 text-white duration-300 rounded-full px-4 py-2 font-normal text-sm"
          >
           {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorySlider;
