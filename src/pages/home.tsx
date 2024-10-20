import { sampleProducts } from "@/data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sampleProducts.map((product) => (
        <div
          key={product.slug}
          className="border rounded-lg overflow-hidden shadow-md"
        >
          <Link to={`/product/${product.slug}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[400px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
