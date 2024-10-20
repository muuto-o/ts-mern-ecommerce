import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div className="text-2xl font-bold">tsamazona</div>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="/cart" className="text-white hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <a href="/signin" className="text-white hover:text-gray-300">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}
