import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../public/assets/makihomeWhite.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src={logo} height={55} alt={"Logo Makihome"} />
        <div>
          <ul>
            <li>Políticas de privacidad</li>
            <li>Términos y condiciones</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Libro de reclamaciones </li>
            <li>Nuestras tiendas</li>
          </ul>
        </div>

        <div>
          <ul>
            <i
              style={{ color: "var(--primary-color)" }}
              className="fas fa-facebook"
            ></i>
            <li>Nuestras tiendas</li>
          </ul>
        </div>
      </div>
      <div className={styles.subFooter}>
        Copyright ©2023 Todos los derechos reservados
      </div>
    </div>
  );
}
