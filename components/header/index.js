import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../public/assets/makihomeWhite.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={logo} height={55} alt={"Logo Makihome"} />
      <div className={styles.separate} />
      <div className={styles.textCall}>
        <p>¡Llámanos!</p>
        <p>(+51) 927 389 072</p>
      </div>
    </div>
  );
}
