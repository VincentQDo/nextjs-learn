export default function Blog({ params }: { params: { blogid: string } }) {
  return (
    <div>
      <p>blog children {params.blogid}</p>
    </div>
  );
}
