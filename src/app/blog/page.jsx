import Menu from '@/components/Menu/Menu'
import CardList from '@/components/cardList/CardList'
import React from 'react'
import styles from "./blogPage.module.css"

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage
