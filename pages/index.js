import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";
import Banner from "@/components/Home/Banner";
import CaNhan from "@/components/Content/CaNhan";
import TruyenHinh from "@/components/Content/TruyenHinh";
import DiDong from "@/components/Content/DiDong";
import Internet from "@/components/Content/Internet";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <CaNhan />
      <TruyenHinh />
      <Internet />
      <DiDong />
    </Layout>
  );
}
