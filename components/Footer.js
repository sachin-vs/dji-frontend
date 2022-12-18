import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> Copyright &Copy; 2022</p>
            <Link href="/about">About</Link>
        </footer>
    )
}