import { Products } from "@/components/products";
import styles from "./page.module.css";
import { Header } from "@/components/header";
import { Stamps } from "@/components/stamps";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Stamps />
    </>
  );
}
