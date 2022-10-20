import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import CategorySlider from "../components/categorySlider";
import Products from "../components/product";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Products</title>
    </Head>
      <div className="flex flex-col p-4 ">
        <Banner />
        <div className="font-bold text-lg mt-3 "> Categories</div>
        <CategorySlider />
        <div>
          <div className="font-bold text-lg mt-3 "> Popular now</div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
