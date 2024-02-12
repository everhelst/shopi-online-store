import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items center p-6">
        <h2 className="font-medium text -xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-7/12 h-10/12"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col pb-2.5 px-6 pt-2">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow && context.productToShow.description
            ? context.productToShow.description.length > 500
              ? `${context.productToShow.description.substring(0, 500)}...`
              : context.productToShow.description
            : "Description not available"}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
