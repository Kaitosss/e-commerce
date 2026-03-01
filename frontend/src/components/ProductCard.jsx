import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { userStore } from "../stores/userStore";
import { cartStore } from "../stores/cartStore";

function ProductCard({ product }) {
  const { user } = userStore();
  const { addtoCart } = cartStore();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart");
      return;
    }

    addtoCart(product);
  };

  return (
    <div className="flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          src={product.image}
          className="object-cover w-full"
          alt="product image"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-emerald-400">
              {product.price + " THB"}
            </span>
          </p>
        </div>
        <button
          className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
          text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
