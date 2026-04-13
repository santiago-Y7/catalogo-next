async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        🛍️ Catálogo de Productos
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="mt-4 font-semibold text-sm line-clamp-2">
              {product.title}
            </h2>

            <p className="text-lg font-bold text-green-600 mt-2">
              ${product.price}
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
              Ver producto
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}