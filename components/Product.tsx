import Link from "next/link";
import ProductImage from "./ProductImage";

type Props = {
    product: Product;
}

function Product({product}: Props) {
  return (
    <Link href={`/product/${product.id}`} className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
        <div className="relative max-h-72 flex-1">
            <ProductImage product={product} fill />
        </div>

        <div className="mt-4 mb-1 flex justify-between items-center font-semibold">
            <p className="w-44 truncate">
                {product.title}
            </p>
            <p>
                ${product.price}
            </p>
        </div>
        <p className="text-xs w-64 italic text-gray-600 line-clamp-2">{product.description}</p>
    </Link>
  );
}

export default Product;
