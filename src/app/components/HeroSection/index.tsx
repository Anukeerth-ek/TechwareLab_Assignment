"use client";
import { useEffect } from "react";
import styles from "./style.module.scss";

const HeroSection = () => {
useEffect(() => {
  const container = document.querySelector(`.${styles.hero__orb_container}`) as HTMLElement | null;
  const orbs = document.querySelectorAll(`.${styles.hero__orb}`) as NodeListOf<HTMLElement>;

  if (!container) return;

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;

    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 10;
      orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  };

  // ✅ Cast the event listener to match HTMLElement’s signature
  container.addEventListener("mousemove", handleMouseMove as EventListener);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove as EventListener);
  };
}, []);


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
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* 🟣 Background Circles */}
      <div className={styles.hero__orb_container}>
        <div className={`${styles.hero__orb} ${styles["hero__orb--1"]}`}></div>
        <div className={`${styles.hero__orb} ${styles["hero__orb--2"]}`}></div>
        <div className={`${styles.hero__orb} ${styles["hero__orb--3"]}`}></div>
        <div className={`${styles.hero__orb} ${styles["hero__orb--4"]}`}></div>
      </div>

      <div className={styles.hero__line}></div>
    </section>
  );
};

export default HeroSection;
