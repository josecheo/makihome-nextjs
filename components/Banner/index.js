import styles from "./styles.module.css";
import Image from "next/image";
import sushiBanner from "../../public/assets/sushi.jpg";
import CardHowToBuy from "../CardHowToBuy";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.image}
        src={sushiBanner}
        fill
        priority={true}
        quality={100}
        alt={"Logo Makihome"}
      />
      <CardHowToBuy />
    </div>
  );
}
