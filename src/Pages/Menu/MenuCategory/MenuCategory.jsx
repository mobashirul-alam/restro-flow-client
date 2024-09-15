import MenuItem from "../../Shared/Components/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 mb-12">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;
