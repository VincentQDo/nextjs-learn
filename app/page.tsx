import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <Link href="/blog/1">Blog container</Link>
    </main>
  );
}
