export default function TaskListLayout({ children }: any) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl font-bold mb-8">Todo App</h1>
          <form>
            <input
              className="bg-gray-200 w-full p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              type="text"
              placeholder="Add a new task"
            />
            {/* Replace the following with the TaskList component */}
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
