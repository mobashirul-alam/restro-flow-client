import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderPageImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import PageCover from "../../Shared/Cover/PageCover";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const desserts = menu.filter((menu) => menu.category === "dessert");
    const salads = menu.filter((menu) => menu.category === "salad");
    const drinks = menu.filter((menu) => menu.category === "drinks");
    const soups = menu.filter((menu) => menu.category === "soup");
    const pizzas = menu.filter((menu) => menu.category === "pizza");

    return (
        <div>
            <PageCover
                title={"Order food"}
                subTitle={"Would you like to try a dish?"}
                img={orderPageImg}
            />

            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                className="my-20"
            >
                <TabList className={"mb-10"}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salads} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
