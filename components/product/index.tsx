/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import useGetProducts from "../../services/useGetProducts";
function Products() {
  const [loading, error, products] = useGetProducts();


  if (error)
    return <div className="font-extrabold text-xl text-red-500">{error}</div>;
  return (
    <div>
      {products.map((p) => (
        <ProductItem key={p.id} {...p} />
      ))}
    </div>
  );
}

export default Products;
interface Props {
  name: string;
  categoryId: string;
  url: string;
  description: string;
  price: string;
  id: number;
}

function ProductItem(props: Props) {
  return (
    <div className=" flex flex-col bg-white rounded-lg border border-gray-200 shadow-md  p-3 mt-12 max-w-sm ">
      <div className="">
        <Image
          className="object-cover rounded-lg w-full "
          src={`${props.url}` }
          height="200px" width={"350px"}
          alt="product"

        />
      </div>
      <div className="font-bold text-lg mt-1 text-center"> {props.name}</div>
      <p className="text-sm-text-start text-gray-300">{props.description}</p>
      <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-48 mx-auto my-3 ">
          Add to Cart
        </button>
    </div>
  );
}
