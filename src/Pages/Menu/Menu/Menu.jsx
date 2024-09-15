import { Helmet } from "react-helmet-async";
import bgImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import ButtonMain from "../../Shared/Components/ButtonMain/ButtonMain";
import SectionHeading from "../../Shared/Components/SectionHeading/SectionHeading";
import PageCover from "../../Shared/Cover/PageCover";
import SectionCover from "../../Shared/Cover/SectionCover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter((menu) => menu.category === "dessert");
    const salads = menu.filter((menu) => menu.category === "salad");
    const drinks = menu.filter((menu) => menu.category === "drinks");
    const soups = menu.filter((menu) => menu.category === "soup");
    const pizzas = menu.filter((menu) => menu.category === "pizza");
    const offered = menu.filter((menu) => menu.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Restro Flow | Menu</title>
            </Helmet>
            <PageCover
                img={bgImg}
                title="Our Menu"
                subTitle={"Would you like to try a dish?"}
            />
            <div className="h-20" />
            <SectionHeading
                heading={"Today's offer"}
                subHeading={"Don't miss"}
            />
            <MenuCategory items={offered} />
            <div className="flex justify-center mb-12">
                <ButtonMain btnText={"Order your favourite food"} />
            </div>

            {/* Desserts */}
            <SectionCover
                img={dessertImg}
                heading={"Desserts"}
                text={
                    "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <div className="mt-20">
                <MenuCategory items={desserts} />
            </div>
            <div className="flex justify-center mb-12">
                <ButtonMain btnText={"Order your favourite food"} />
            </div>

            {/* Pizza */}
            <SectionCover
                img={pizzaImg}
                heading={"Pizza"}
                text={
                    "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <div className="mt-20">
                <MenuCategory items={pizzas} />
            </div>
            <div className="flex justify-center mb-12">
                <ButtonMain btnText={"Order your favourite food"} />
            </div>

            {/* Salads */}
            <SectionCover
                img={saladImg}
                heading={"Salads"}
                text={
                    "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <div className="mt-20">
                <MenuCategory items={salads} />
            </div>
            <div className="flex justify-center mb-12">
                <ButtonMain btnText={"Order your favourite food"} />
            </div>

            {/* Soups */}
            <SectionCover
                img={soupImg}
                heading={"Soups"}
                text={
                    "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <div className="mt-20">
                <MenuCategory items={soups} />
            </div>
            <div className="flex justify-center mb-12">
                <ButtonMain btnText={"Order your favourite food"} />
            </div>

            {/* Drinks */}
            <SectionCover
                img={bgImg}
                heading={"Drinks"}
                text={
                    "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            />
            <div className="mt-20">
                <MenuCategory items={drinks} />
            </div>
            <div className="flex justify-center mb-12">
                <ButtonMain btnText={"Order your favourite food"} />
            </div>
        </div>
    );
};

export default Menu;
