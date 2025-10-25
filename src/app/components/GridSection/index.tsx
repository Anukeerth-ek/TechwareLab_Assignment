import Image from "next/image";
import styles from "./style.module.scss";

const GridSection = () => {
  const logos = [
    { id: 1, src: "/Grid-1.png", subtitle: "LOGOIPSUM" },
    { id: 2, src: "/Grid-2.png", subtitle: "LOGOIPSUM", featured: true },
    { id: 3, src: "/Grid-3.png", subtitle: "LOGOIPSUM" },
    { id: 4, src: "/Grid-4.png", subtitle: "LOGOIPSUM" },
    { id: 5, src: "/Grid-5.png", subtitle: "LOGOIPSUM" },
  ];

  return (
    <section className={styles.showcase}>
      <div className={styles.showcase__container}>
        <div className={styles.showcase__grid}>
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`${styles.showcase__card} ${
                logo.featured ? styles["showcase__card--featured"] : ""
              }`}
            >
              <div className={styles.showcase__logo}>
                <Image
                  src={logo.src}
                  alt="Logo"
                  width={200}
                  height={80}
                  className={styles.showcase__image}
                />
              </div>
              <p className={styles.showcase__subtitle}>{logo.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridSection;
