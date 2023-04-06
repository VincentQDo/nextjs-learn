export default function BlogLayout({ params }: { params: { multipleblogids: string[] } }) {
  console.log(params);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world! test</h1>
      {params.multipleblogids.map((linkParam: string) => (
        <p key={linkParam}>link param value {linkParam}</p>
      ))}
    </div>
  );
}
