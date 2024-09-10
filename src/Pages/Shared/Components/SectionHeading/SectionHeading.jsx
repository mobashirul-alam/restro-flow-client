const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="w-[424px]">
                <p className="italic text-xl text-[#D99904] mb-3 text-center">
                    --- {subHeading} ---
                </p>
                <h2 className="text-[40px] uppercase text-center py-2 border-y-4 border-[#E8E8E8] text-black dark:text-white font-regular">
                    {heading}
                </h2>
            </div>
        </div>
    );
};

export default SectionHeading;
