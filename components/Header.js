import Link from 'next/link';
import { useRouter } from "next/router";

export default function Header() {

  const router = useRouter();

  return (
    <header className="header">
        <div className="inner-wrapper inner-wrapper--header">
          <nav className="nav">
              <Link href="/" className={router.pathname == "/" ? "nav__link active" : "nav__link"}>Home</Link>
              <Link href="/blog" className={router.pathname == "/blog" ? "nav__link active" : "nav__link"}>Blog</Link>
          </nav>
        </div>
    </header>
  )
}   