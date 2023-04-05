import Link from "next/link";

export default function BlogLayout({ children }: any) {
  const blogarrays = [1, 2, 3, 4];
  return (
    <div>
      <p>blog container</p>
      {blogarrays.map((blogid: number) => (
        <Link key={blogid} href={`/blog/${blogid}`}>
          blog{blogid}
        </Link>
      ))}
      <Link href="/blog/5/6/7/8/9">arrayofparams/catchall</Link>
      {children}
    </div>
  );
}
