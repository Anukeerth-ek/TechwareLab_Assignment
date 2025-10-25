import Image from "next/image";
import styles from './style.module.scss'

const MarqueeSection = () => {
  const logos = [
    { id: 1, src: '/marquee-1.png', alt: 'Logoipsum' },
    { id: 2, src: '/marquee-2.png', alt: 'Logoipsum' },
    { id: 3, src: '/marquee-3.png', alt: 'Logoipsum' },
    { id: 4, src: '/marquee-1.png', alt: 'Logoipsum' },
    { id: 5, src: '/marquee-2.png', alt: 'Logoipsum' },
    { id: 6, src: '/marquee-3.png', alt: 'Logoipsum' },
    { id: 7, src: '/marquee-1.png', alt: 'Logoipsum' },
    { id: 8, src: '/marquee-2.png', alt: 'Logoipsum' },
  ];

  return (
    <section className={styles.logoStrip}>
      <div className={styles.logoStrip__track}>
        <div className={styles.logoStrip__content}>
          {logos.map((logo) => (
            <div key={`first-${logo.id}`} className={styles.logoStrip__item}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={32}
                className={styles.logoStrip__logo}
              />
            </div>
          ))}

          {logos.map((logo) => (
            <div key={`second-${logo.id}`} className={styles.logoStrip__item}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={32}
                className={styles.logoStrip__logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection