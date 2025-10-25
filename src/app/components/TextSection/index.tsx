"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const TextSection = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Fade in when visible, fade out when not visible
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2, // triggers when 20% of the text is visible
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.heroSection}>
      <div
        ref={textRef}
        className={`${styles.textBlock} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
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
  );
};

export default TextSection;
