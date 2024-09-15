import FoodMenuCard from "../../Shared/Components/FoodMenuCard/FoodMenuCard";

const OrderTab = ({ items }) => {
    return (
        <div className="columns-3 gap-x-6 gap-y-10">
            {items.map((menu) => (
                <FoodMenuCard key={menu._id} menu={menu} />
            ))}
        </div>
    );
};

export default OrderTab;
