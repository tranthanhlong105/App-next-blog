import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="blog king" width={50} height={50} />
          <h1 className={styles.logoText}>Blog King</h1>
        </div>
        <p className={styles.desc}>
          Báo tiếng Việt nhiều người xem nhất Thuộc Bộ Khoa học và Công nghệ Số
          giấy phép: 548/GP-BTTTT ngày 24/08/2021
        </p>
        <div className={styles.icon}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepages</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Styles</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">instagram</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
