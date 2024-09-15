import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

const FoodMenuCard = ({ menu }) => {
    const { image, name, recipe } = menu;

    return (
        <div className="flex-1 break-inside-avoid mb-6">
            <img src={image} alt="" className="w-full h-1/2" />
            <div className="bg-[#F3F3F3] text-center py-8 px-10 text-black">
                <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                <p className="mb-6">{recipe}</p>
                <AddToCartBtn />
            </div>
        </div>
    );
};

export default FoodMenuCard;
