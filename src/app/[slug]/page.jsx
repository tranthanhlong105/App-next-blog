import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            In our database section you will learn how to access and work with
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Long</span>
              <span className={styles.date}>01.01.2032</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Hơn 600 người chặt cây mở đường, băng rừng, dùng xe đẩy vận chuyển
              nhiều thiết bị, máy móc, suốt đêm dập lửa ở rừng tràm tại huyện
              Trần Văn Thời.
            </p>
            <h2>Hello every one</h2>
            <p>
              Hơn 600 người chặt cây mở đường, băng rừng, dùng xe đẩy vận chuyển
              nhiều thiết bị, máy móc, suốt đêm dập lửa ở rừng tràm tại huyện
              Trần Văn Thời.
            </p>
            <p>
              Hơn 600 người chặt cây mở đường, băng rừng, dùng xe đẩy vận chuyển
              nhiều thiết bị, máy móc, suốt đêm dập lửa ở rừng tràm tại huyện
              Trần Văn Thời.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
