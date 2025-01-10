import { Chart } from "@/components/Chart";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Chart coin="BITCOIN" />
    </div>
  );
}
