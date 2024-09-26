type TProductProps = {
  img_url: string;
  name: string;
  brand: string;
};
const BestSellerProdCard = ({ img_url, name, brand }: TProductProps) => {
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
      </div>
    </div>
  );
};

export default BestSellerProdCard;
