import Image from "next/image";
import styles from './style.module.scss';

const GridSection = () => {
    const logos = [
    {
      id: 1,
      src: '/images/logos/logo-1.png', 
      subtitle: 'LOGOIPSUM'
    },
    {
      id: 2,
      src: '/images/logos/logo-2.png',
      alt: 'Logo 2',
      subtitle: 'LOGOIPSUM',
      featured: true 
    },
    {
      id: 3,
      src: '/images/logos/logo-3.png',
      alt: 'Logo 3',
      subtitle: 'LOGOIPSUM'
    },
    {
      id: 4,
      src: '/images/logos/logo-4.png',
      alt: 'Logo 4',
      subtitle: 'LOGOIPSUM'
    },
    {
      id: 5,
      src: '/images/logos/logo-5.png',
      alt: 'Logo 5',
      subtitle: 'LOGOIPSUM'
    }
  ];

  return (
    <section className={styles.showcase}>
      <div className={styles.showcase__container}>
        <div className={styles.showcase__grid}>
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`${styles.showcase__card} ${
                logo.featured ? styles['showcase__card--featured'] : ''
              }`}
            >
              <div className={styles.showcase__logo}>
                <Image
                  src={logo.src}
                  alt={logo.alt || "Logo Image"}
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
  )
}

export default GridSection