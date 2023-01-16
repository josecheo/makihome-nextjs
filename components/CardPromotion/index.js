import styles from "./styles.module.css";
import Image from "next/image";

export default function CardPromotion({ title, description, price, img }) {
  let intPrice = price.split(".");

  return (
    <div className={styles.cardPromotion}>
      <div className={styles.overload} />
      <Image
        className={styles.image}
        src={img}
        fill
        priority={true}
        quality={100}
        alt={title}
      />

      <div className={styles.infoCardPromotion}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.priceWrapper}>
        <span>{intPrice[0]}</span>
        <p>{intPrice[1]}</p>
      </div>
    </div>
  );
}
