// import React from "react";
// import styles from "./categoryList.module.css";
// import Image from "next/image";
// import Link from "next/link";

// //size of cache
// const cacheSize = 5;

// // array strage cache first new
// const latestContentsCache = [];

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();

//   latestContentsCache.unshift(data);

//   if (latestContentsCache.length > cacheSize) {
//     latestContentsCache.pop();
//   }

//   return latestContentsCache;
// };

// const CategoryList = async () => {
//   const data = await getData();

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Popular Categories</h1>
//       <div className={styles.categories}>
//         {data?.map((item) => (
//           <Link
//             href="/blog?cat=style"
//             className={`${styles.category} ${styles[item.slug]}`}
//             key={item._id}
//           >
//             {item.img && (
//               <Image
//                 src={item.img}
//                 alt=""
//                 width={32}
//                 height={32}
//                 className={styles.image}
//               />
//             )}

//             {item.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;

import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

// Số lượng bài viết trong cache
const cacheSize = 5;

// Mảng lưu trữ cache cho 5 bài viết mới nhất
const latestContentsCache = [];

// Hàm lấy dữ liệu từ API và quản lý cache
const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed");
    }

    const data = await res.json();

    // Thêm dữ liệu mới nhất vào đầu mảng cache
    latestContentsCache.unshift(data);

    // Kiểm tra nếu cache vượt quá kích thước quy định, loại bỏ các bài viết cũ
    if (latestContentsCache.length > cacheSize) {
      latestContentsCache.pop();
    }

    return latestContentsCache;
    //console.log(latestContentsCache)
  } catch (error) {
    console.error("Failed to fetch or cache data:", error);
    return latestContentsCache; // Trả về cache hiện tại nếu không thể lấy dữ liệu mới
  }
};

const CategoryList = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`} // Sử dụng slug của mỗi category
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
