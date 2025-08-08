// /src/App.tsx

import ProductCard from './components/ProductCard';
import type { Product } from './types';
import './app.css'; // optional

const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Headphones ZX-200',
    imageUrl:
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
      { id: 'v1', label: 'Black', price: 79.99, inStock: true },
      { id: 'v2', label: 'White', price: 79.99, inStock: false },
    ],
  },
  {
    id: 'p2',
    name: 'Smartwatch Pro S',
    imageUrl:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop',
    variants: [{ id: 'v3', label: '42mm', price: 129.0, inStock: true }],
  },
  {
    id: 'p3',
    name: 'Compact Camera X10',
    imageUrl:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    variants: [
      { id: 'v4', label: 'Body only', price: 399, inStock: false },
      { id: 'v5', label: 'Kit Lens', price: 479, inStock: false },
    ],
  },
];

export default function App() {
  const handleAdd = (p: { productId: string; variantId: string }) => {
    // Replace with your store/cart action
    alert(`Added to cart:\nproduct=${p.productId}\nvariant=${p.variantId}`);
  };

  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ marginBottom: 16 }}>Products</h1>
      <section
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAdd} />
        ))}
      </section>
    </main>
  );
}
