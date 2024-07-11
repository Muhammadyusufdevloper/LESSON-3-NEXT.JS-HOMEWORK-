import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import Testimo from "@/components/testimo/Testimo";
import Product from "./product/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Product limit={8} title={"Products"} text={"Order it for you or for your beloved ones "} />
      <Clean />
      <Testimo />
      <Product limit={4} title={"Popular"} text={"Our top selling product that you may like"} />
    </>
  );
}
