import useMenu from "../../../hooks/useMenu";
import ButtonMain from "../../Shared/Components/ButtonMain/ButtonMain";
import MenuItem from "../../Shared/Components/MenuItem/MenuItem";
import SectionHeading from "../../Shared/Components/SectionHeading/SectionHeading";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter((menu) => menu.category === "popular");

    return (
        <section>
            <SectionHeading
                heading={"From our menu"}
                subHeading={"Check it out"}
            />
            <div className="grid grid-cols-2 gap-6 mb-12">
                {popularMenu.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <div className="flex justify-center mb-28">
                <ButtonMain btnText={"View full menu"} />
            </div>
        </section>
    );
};

export default PopularMenu;
