// import serviceImg from "../../../assets/home/chef-service.jpg";

import { Parallax } from "react-parallax";

const SectionCover = ({ img, heading, text }) => {
    return (
        <Parallax bgImage={img} bgImageAlt="the section" strength={300}>
            <div className={` px-36 py-28`}>
                <div className="px-36 py-20 bg-[#151515]/60 text-white">
                    <h1 className="text-[40px] font-semibold uppercase text-center font-cinZel">
                        {heading}
                    </h1>
                    <p className="text-center mt-2">{text}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCover;
