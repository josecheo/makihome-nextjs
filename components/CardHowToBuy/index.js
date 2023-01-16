import { useState } from "react";
import styles from "./styles.module.css";

export default function CardHowToBuy() {
  const [isDelivery, setIsDelivery] = useState(true);

  return (
    <div className={styles.card}>
      {/* <span className={styles.tittle}>
        Elige cómo <strong>quieres comprar</strong>
      </span> */}

      <div className={styles.selectsButton}>
        <div
          className={isDelivery ? styles.optionActive : styles.optionNoActive}
          onClick={() => setIsDelivery(!isDelivery)}
        >
          <span>
            Quiero <strong>Delivery</strong>
          </span>
        </div>

        <div
          className={!isDelivery ? styles.optionActive : styles.optionNoActive}
          onClick={() => setIsDelivery(!isDelivery)}
        >
          <span>
            Quiero <strong>Recojer</strong>
          </span>
        </div>
      </div>

      <div className={styles.cardform}>
        {isDelivery ? (
          <span>Con tu dirección vamos a verificar el área de cobertura</span>
        ) : (
          <span>
            Con tu dirección vamos a sugerirte la tienda Maki home más cercana
          </span>
        )}

        <div className={styles.searchInput}>
          <a href="" target="_blank" hidden></a>
          <input type="text" placeholder="Ingresa tu dirección..." />
          <div className={styles.autocomBox}></div>
          <div className={styles.icon}>
            <i
              style={{ color: "var(--primary-color)" }}
              className="fas fa-search"
            ></i>
          </div>
        </div>
        <div className={styles.location}>
          <i className="fas fa-location-arrow"></i>
          <p>Usar mi ubicación</p>
        </div>
      </div>
    </div>
  );
}
