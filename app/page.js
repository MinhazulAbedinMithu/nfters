import AmazeNFT from "@/components/AmazeNFT/AmazeNFT";
import CollectionNFT from "@/components/CollectionNFT/CollectionNFT";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import TopCollectionOver from "@/components/TopCollectionOver/TopCollectionOver";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[72px] w-full">
      <HeroBanner />
      <AmazeNFT />
      <TopCollectionOver />
      <CollectionNFT />
    </main>
  );
}
