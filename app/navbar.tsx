"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 to-blue-700 text-white shadow-lg p-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold whitespace-nowrap">Todo App</h1>
        <div className="flex justify-center items-center w-full">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link className="hover:text-blue-400 transition-all nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition-all nav-link" href="/todolist">
                Todo List
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition-all nav-link" href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => console.log("Not implemented yet")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded text-white focus:outline-none whitespace-nowrap hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
