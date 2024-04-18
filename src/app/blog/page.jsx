import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import React from "react";
import styles from "./blogPage.module.css";

const BlogPage = ({ searchParam }) => {
  const page = parseInt(searchParam.page) || 1;
  const { cat } = searchParam;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat}Style Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
