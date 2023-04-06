export default function TaskList({ params }: { params: { userid: string } }) {
  console.log(params);
  return (
    <ul>
      <li className="bg-gray-200 p-3 mb-4 rounded-lg">
        <span>Task 1</span>
      </li>
      <li className="bg-gray-200 p-3 mb-4 rounded-lg">
        <span>Task 2</span>
      </li>
      <li className="bg-gray-200 p-3 mb-4 rounded-lg">
        <span>Task 3</span>
      </li>
    </ul>
  );
}
