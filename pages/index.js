import { Suspense } from "react";
import dynamic from "next/dynamic";
import sushiBanner from "../public/assets/sushi-748139_1920.jpg";
import sushiBanner2 from "../public/assets/sushi-2942101_1920.jpg";
import sushiBanner3 from "../public/assets/bannersushi3.png";

const HeadTags = dynamic(() => import("./components/HeadTags"), {
  suspense: true,
});

const Header = dynamic(() => import("./components/header"), {
  suspense: true,
});
const CaruselImage = dynamic(() => import("./components/carusel"), {
  suspense: true,
});

const images = [
  {
    thumbnail: sushiBanner,
  },
  {
    thumbnail: sushiBanner2,
  },
  {
    thumbnail: sushiBanner3,
  },
];
export default function Home() {
  return (
    <Suspense fallback={``}>
      <HeadTags
        title="Maki Home | Sushi Delivery"
        description="Sushi delivery."
      />
      <Header />
      <CaruselImage images={images} onChange={() => {}} imgNumber={0} />
    
    </Suspense>
  );
}
