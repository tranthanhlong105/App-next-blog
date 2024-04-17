import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024</span>
          <span className={styles.category}> - CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Khởi đầu với triết lý lấy độc giả làm trung tâm, 23 năm qua, VnExpress
          không ngừng nỗ lực để đáp ứng kỳ vọng của công chúng. Trong bối cảnh
          nhiều thách thức mới, chúng tôi đứng trước câu hỏi: Thay đổi thế nào
          để phụng sự tốt hơn?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
