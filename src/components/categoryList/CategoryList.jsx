import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const cacheSize = 5; // Kích thước của cache

// Mảng để lưu trữ các nội dung mới nhất
const latestContentsCache = [];

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
  // Thêm nội dung mới nhất vào đầu mảng
  latestContentsCache.unshift(data);

  // Giữ cho kích thước của mảng nhỏ hơn hoặc bằng cacheSize
  if (latestContentsCache.length > cacheSize) {
    latestContentsCache.pop(); // Xóa phần tử cuối cùng của mảng
  }

  return latestContentsCache;
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
