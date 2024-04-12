import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comments..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comments</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comments}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Long thu nhat</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Simplemente Increible!!!! me parecen los mejores videos de
            desarrollo web que hay, soy nuevo en todo esto y aprender de ti es
            muy gratificante, no se ingles pero aun asi logro entender todo lo
            que haces.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comments}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Long thu nhat</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Simplemente Increible!!!! me parecen los mejores videos de
            desarrollo web que hay, soy nuevo en todo esto y aprender de ti es
            muy gratificante, no se ingles pero aun asi logro entender todo lo
            que haces.
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comments}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Long thu nhat</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Simplemente Increible!!!! me parecen los mejores videos de
            desarrollo web que hay, soy nuevo en todo esto y aprender de ti es
            muy gratificante, no se ingles pero aun asi logro entender todo lo
            que haces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
