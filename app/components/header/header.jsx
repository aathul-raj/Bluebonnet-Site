import Logo from "../../../public/Logo.svg"
import styles from "./header.module.css"
import Image from "next/image";

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src={Logo.src} alt="Bluebonnet Logo" fill sizes="100vh" style={{ objectFit: "contain" }}/>
            </div>

            <ul>
                <li><a className={styles.navButton} href="/">Home</a></li>
                <li><a className={styles.navButton} href="/about">About</a></li>
                <li><a className={styles.navButton} href="/services">Services</a></li>
                <li><a className={styles.contactButton} href="">Contact</a></li>
            </ul>
        </header>
    )
}