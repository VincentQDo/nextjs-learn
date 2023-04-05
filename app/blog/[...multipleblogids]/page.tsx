export default function BlogLayout({ params }: { params: { multipleblogids: string[] } }) {
  console.log(params);
  return (
    <div>
      {params.multipleblogids.map((linkParam: string) => (
        <p key={linkParam}>link param value {linkParam}</p>
      ))}
    </div>
  );
}
