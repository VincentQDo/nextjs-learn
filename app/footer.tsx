export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-blue-700 text-white shadow-lg p-2">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-md">&copy; {new Date().getFullYear()} Todo App</p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
