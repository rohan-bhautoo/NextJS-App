import Image from "next/image";
import blackHole from "@/public/images/Space-Stars-Black-Hole.jpg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        className="object-cover"
        alt="Black Hole"
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
      />
    </main>
  );
}
