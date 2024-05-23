import Image from 'next/image';
import styles from './blogPost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/21655968/pexels-photo-21655968/free-photo-of-people-walking-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src='https://images.pexels.com/photos/21655968/pexels-photo-21655968/free-photo-of-people-walking-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Tan</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          deserunt repudiandae architecto voluptatem harum ipsa ut fugit
          possimus, quisquam dolore, culpa deleniti, eos laboriosam? Debitis
          labore repellendus tempore recusandae ut.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
