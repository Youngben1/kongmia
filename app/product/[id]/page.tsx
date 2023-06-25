import ProductImage from "@/components/ProductImage";

type Props = {
    params: {
        id: string;
    }
}
async function ProductPage({params: {id}}: Props) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();
    
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        <ProductImage product={product} />

        <div className="divide-y">
            <div className="pb-8 space-y-2">
                <h1 className="font-2xl md:text-4xl font-bold">{product.title}</h1>
                <h2 className="text-xl font-bold md:text-3xl text-gray-600">${product.price}</h2>
            </div>
            <div className="pt-8">
                <p className="text-xs md:text-sm">{product.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductPage