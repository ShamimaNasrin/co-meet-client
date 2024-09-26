import { Link } from "react-router-dom";
import CardButton from "../buttons/CardButton";

type TProductProps = {
  _id: string;
  img_url: string;
  name: string;
  brand: string;
  stock_quantity: number;
  price: number;
};

const ProductCard = ({
  _id,
  img_url,
  name,
  brand,
  stock_quantity,
  price,
}: TProductProps) => {
  // console.log("id:", _id);
  return (
    <div className=" bg-white rounded-md shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <div className="overflow-hidden">
        <img
          src={img_url}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      <div className="p-4 ">
        <h2 className="font-bold text-lg mb-2">
          {name?.length > 50 ? name?.slice(0, 50) + "..." : name}
        </h2>
        <p className="text-sm text-gray-500 mb-1">Brand: {brand}</p>
        <p className="text-sm text-gray-500 mb-3">InStock: {stock_quantity}</p>

        <div className="flex items-center mb-3">
          <p className="text-xl font-semibold text-gray-800">TK.{price}</p>
        </div>

        <Link to={`/productDetails/${_id}`}>
          <CardButton str="See Details" path={`/productDetails/${_id}`} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
