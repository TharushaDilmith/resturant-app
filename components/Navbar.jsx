import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callbutton}>
          <Image src="/img/ela.png" alt="" width="32px" height="32px" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>077 685 0715</div>
        </div>
      </div>
      <div className={styles.item}>Center</div>
      <div className={styles.item}>right</div>
    </div>
  );
}
