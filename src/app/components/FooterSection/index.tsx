
import styles from './style.module.scss';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__social}>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.footer__socialLink}
            aria-label="Instagram"
          >
           <FaInstagram />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.footer__socialLink}
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.footer__socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>


        <div className={styles.footer__text}>
          Lorem Ipsum Lorem Ipsum
        </div>

 
        <div className={styles.footer__copyright}>
          © TechwareLab copyrights
        </div>
      </div>
    </footer>
  )
}

export default Footer