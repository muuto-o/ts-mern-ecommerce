import { sampleProducts } from "@/data";

function App() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleProducts.map((product) => (
              <div
                key={product.slug}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-[400px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
