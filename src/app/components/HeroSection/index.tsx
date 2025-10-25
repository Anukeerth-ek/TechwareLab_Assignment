import styles from "./style.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Smarter Solutions
          <br />
          Powered by AI
        </h1>
        <p className={styles.hero__subtitle}>
          Streamline operations, reduce costs, and scale effortlessly with
          <br />
          our AI-driven tools
        </p>
        <button className={styles.hero__cta}>
          Start A Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      

        <div className={styles.hero__orb_container}>
        <div className={`${styles.hero__orb} ${styles['hero__orb--1']}`}></div>
        <div className={`${styles.hero__orb} ${styles['hero__orb--2']}`}></div>
        <div className={`${styles.hero__orb} ${styles['hero__orb--3']}`}></div>
        <div className={`${styles.hero__orb} ${styles['hero__orb--4']}`}></div>
      </div>

      
      <div className={styles.hero__line}></div>
    </section>
  )
}

export default HeroSection