import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

import coffeeStoresData from '../../data/coffee-stores.json';
import styles from '../../styles/coffee-store.module.css';

export async function getStaticProps({ params }) {
  const coffeeStore = coffeeStoresData.find(cf => cf.id === +params.id);
  return {
    props: {
      coffeeStore
    }
  }
}

export async function getStaticPaths() {
  const paths = coffeeStoresData.map((cf) => ({
    params: { id: cf.id.toString() },
  }));
  return {
    paths,
    fallback: false
  };
}

const Coffee = ({ coffeeStore }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const { address, name, neighbourhood, imgUrl } = coffeeStore;

  const handleUpvoteButton = () => {

  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}></div>
          <Link href='/'>
            Back to home
          </Link>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt='name'
          />
        </div>
        <div className={classNames('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width={24}
              height={24} alt='places'
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width={24}
              height={24}
              alt='nearMe'
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width={24}
              height={24}
              alt='stars'
            />
            <p className={styles.text}>1</p>
          </div>

          <button
            className={styles.upvoteButton}
            onClick={handleUpvoteButton}
          >
            Up vote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Coffee;