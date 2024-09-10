const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex items-start gap-x-8">
            {item.image ? (
                <img
                    src={image}
                    alt=""
                    className="w-[118px] h-[104px] rounded-tl-none rounded-tr-full rounded-b-full bg-[#D9D9D9]"
                />
            ) : (
                <div className="w-[118px] h-[104px] rounded-tl-none rounded-tr-full rounded-b-full bg-[#D9D9D9]"></div>
            )}
            <div className="flex items-start">
                <div>
                    <h3 className="text-xl uppercase font-cinZel">
                        {name} ----------
                    </h3>
                    <p className="text-base">{recipe}</p>
                </div>
                <p className="text-[#BB8506] text-xl">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;
