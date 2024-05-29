import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from "../../../public/Logo.png"
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.footerLogo}>
            <div className={styles.footerLogoLine}></div>
                <Image src={Logo} layout="responsive" alt="Logo" className={styles.footerLogoImg} width={300}/>
            <div className={styles.footerLogoLine}></div>
        </div>

        <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
                <Link href="/" className={styles.footerLink}>Home</Link>
                <Link href="/about" className={styles.footerLink}>About</Link>
            </div>
            <div className={styles.footerIcons}>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.socialLink}/>
                </a>
                <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.socialLink}/>
                </a>
            </div>
            <div className={styles.footerServices}>
                <Link href="/services" className={styles.footerLink}>Services</Link>
                <Link href="#top" className={styles.footerLink}>Back to top</Link>
            </div>
        </div>

        <div className={styles.footerCta}>
            <h3>How can we help?</h3>
            <p>Let&apos;s talk.</p>
        </div>
    </footer>
  );
};

export default Footer;