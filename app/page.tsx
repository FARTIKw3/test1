import { Products } from "@/components/products";
import { Header } from "@/components/header";
import { Stamps } from "@/components/stamps";
import { Form } from "@/components/form";
import { Concrete } from "@/components/concrete";
import { Solution } from "@/components/solution";
import { About } from "@/components/about";
import { Delivery } from "@/components/delivery";
import { ProjectSlider } from "@/components/completedprojects";
import { Accordion } from "@/components/accordion";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Stamps />
      <Form imageSrc="/barrels.jpg" imageAlt="barrels" />
      <Concrete />
      <Solution />
      <Form imageSrc="/excavator.jpg" imageAlt="excavator" />
      <About />
      <Delivery />
      <ProjectSlider />
      <Accordion />
      <Form imageSrc="/shpatel.jpg" imageAlt="shpatel" />
    </>
  );
}
