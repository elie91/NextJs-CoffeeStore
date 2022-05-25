import Link from "next/link";
import { useRouter } from "next/router";

const Coffee = () => {
  const router = useRouter();

  return (
    <>
      <div>
        Coffee page {router.query.id}
      </div>
      <Link href='/'>
        Back to home
      </Link>
    </>
  )
}

export default Coffee;