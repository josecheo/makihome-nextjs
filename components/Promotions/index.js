import styles from "./styles.module.css";
import sushiLogo1 from "../../public/assets/sushiLogo1.png";
import Image from "next/image";
import CardPromotion from "../CardPromotion";
import { promotionLists } from "../../pages/api/promotiosList";
import { Children } from "react";

export default function Promotions() {

  console.log(promotionLists)
  return (
    <div className={styles.wrapper}>
      <Image
        src={sushiLogo1}
        priority={true}
        width={50}
        quality={100}
        alt={"Logo"}
      />
      <h1>Las mejores promociones</h1>
      <div className={styles.cardPromotionWrapper}>
        {Children.toArray(
          promotionLists.map((element) => (
            <CardPromotion
              title={element.title}
              description={element.description}
              price={element.price}
              img={element.background}
            />
          ))
        )}
      </div>
    </div>
  );
}
