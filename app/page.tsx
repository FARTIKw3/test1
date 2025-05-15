import { Products } from "@/components/products";
import { Header } from "@/components/header";
import { Stamps } from "@/components/stamps";
import { Form } from "@/components/form";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Stamps />
      <Form />
    </>
  );
}
