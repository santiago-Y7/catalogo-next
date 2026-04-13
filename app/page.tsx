export const dynamic = 'force-dynamic';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Error fetching products');
  }

  const data = await res.json();
  return data.products;
}

export default async function Home() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Catálogo de Productos
      </h1>

      {products.length === 0 ? (
        <p className="text-center">Error cargando productos =( </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="mt-4 font-semibold text-sm">
                {product.title}
              </h2>

              <p className="text-lg font-bold text-green-600 mt-2">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}