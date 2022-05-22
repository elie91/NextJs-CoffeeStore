import styles from './banner.module.css';

const Banner = ({ buttonText, handleClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffe</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>
        Discover your local coffee shops!
      </p>
      <button className={styles.button} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default Banner;