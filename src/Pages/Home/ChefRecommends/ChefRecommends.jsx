import { useEffect, useState } from "react";
import FoodMenuCard from "../../Shared/Components/FoodMenuCard/FoodMenuCard";
import SectionHeading from "../../Shared/Components/SectionHeading/SectionHeading";

const ChefRecommends = () => {
    const [chefRecommends, setChefRecommends] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((response) => response.json())
            .then((data) => {
                const filteredMenu = data
                    .filter((menu) => menu.category === "offered")
                    .slice(0, 3);
                setChefRecommends(filteredMenu);
            });
    }, []);

    return (
        <section>
            <SectionHeading
                heading={"Chef Recommends"}
                subHeading={"Should Try"}
            />
            <div className=" grid grid-cols-3 gap-x-6">
                {chefRecommends.map((menu) => (
                    <FoodMenuCard key={menu._id} menu={menu} />
                ))}
            </div>
        </section>
    );
};

export default ChefRecommends;
