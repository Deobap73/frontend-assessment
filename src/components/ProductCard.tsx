// /src/components/ProductCard.tsx
import { useMemo, useState } from 'react';
import type { Product, Variant } from '../types';
import './ProductCard.scss';

type Props = {
  product: Product;
  onAddToCart?: (payload: { productId: string; variantId: string }) => void;
  currency?: string; // e.g. "EUR", "USD"
};

const formatPrice = (n: number, currencyCode: string) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
  }).format(n);

export default function ProductCard({ product, onAddToCart, currency = 'EUR' }: Props) {
  const firstInStock = useMemo(
    () => product.variants.find((v) => v.inStock) ?? product.variants[0],
    [product.variants]
  );

  const [selected, setSelected] = useState<Variant>(firstInStock);

  const multipleVariants = product.variants.length > 1;
  const isOut = !product.variants.some((v) => v.inStock);

  const priceToShow = selected?.price ?? product.variants[0]?.price;

  const handleAdd = () => {
    if (!selected?.inStock) return;
    onAddToCart?.({ productId: product.id, variantId: selected.id });
  };

  return (
    <article className='product-card'>
      <figure className='product-card__media'>
        <img src={product.imageUrl} alt={product.name} loading='lazy' decoding='async' />
        {isOut && <span className='product-card__badge'>Out of stock</span>}
      </figure>

      <div className='product-card__body'>
        <h3 className='product-card__name'>{product.name}</h3>

        <div className='product-card__row'>
          <div className='product-card__price'>{formatPrice(priceToShow, currency)}</div>

          <div className='product-card__variant'>
            {multipleVariants ? (
              <>
                <label className='sr-only' htmlFor={`variant-${product.id}`}>
                  Choose variant
                </label>
                <select
                  id={`variant-${product.id}`}
                  value={selected?.id}
                  onChange={(e) => {
                    const v = product.variants.find((v) => v.id === e.target.value);
                    if (v) setSelected(v);
                  }}>
                  {product.variants.map((v) => (
                    <option key={v.id} value={v.id} disabled={!v.inStock}>
                      {v.label} {v.inStock ? '' : '— Out'}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span className='product-card__variant-label'>{product.variants[0]?.label}</span>
            )}
          </div>
        </div>

        <button
          className='product-card__cta'
          onClick={handleAdd}
          disabled={isOut || !selected?.inStock}>
          {isOut || !selected?.inStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}
