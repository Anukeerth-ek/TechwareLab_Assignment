import styles from './style.module.scss'
const TextSection = () => {
  return (
 <section className={styles.heroSection}>
      <div className={styles.textBlock}>
        <p>
          <span className={styles.boldWhite}>
            We build cutting-edge AI solutions that help businesses automate
          </span>{" "}
          <span className={styles.grayText}>
            processes, gain insights, and deliver smarter experiences. Whether
            you're looking to streamline operations, personalize customer
            journeys, or leverage predictive analytics, our AI-powered tools are
            designed to drive growth and innovation.
          </span>
        </p>
      </div>
    </section>
  )
}

export default TextSection