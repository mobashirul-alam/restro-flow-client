import bgFeatured from "../../../assets/home/featured.jpg";
import ButtonMain from "../../Shared/Components/ButtonMain/ButtonMain";
import SectionHeading from "../../Shared/Components/SectionHeading/SectionHeading";

const Featured = () => {
    return (
        <section
            className="mt-28 bg-fixed"
            style={{
                backgroundImage: `url(${bgFeatured})`,
                backgroundSize: `cover`,
            }}
        >
            <div className="bg-[#151515]/70 py-24 px-32">
                <SectionHeading
                    heading="Featured Menu"
                    subHeading="Check it out"
                />

                <div className="flex justify-center items-center gap-x-16">
                    <img src={bgFeatured} alt="" className="w-[448px]" />
                    <div className="text-white font-light">
                        <p className="text-xl">March 20, 2024</p>
                        <p className="text-2xl uppercase mb-2">
                            Where can I get some?
                        </p>
                        <p className="text-lg mb-6 font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil odit tenetur, fuga quasi ab architecto
                            omnis quam officia id temporibus. Nihil odit
                            tenetur, fuga quasi ab architecto omnis quam officia
                            id temporibus.
                        </p>
                        <ButtonMain btnText={"Read more"} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
