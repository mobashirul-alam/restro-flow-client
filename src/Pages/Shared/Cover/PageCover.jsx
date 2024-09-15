const PageCover = ({ img, title, subTitle }) => {
    return (
        <div>
            <div
                className="hero h-[600px]"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="hero-content text-neutral-content text-center ">
                    <div className="bg-[#151515] bg-opacity-60 py-20 px-56 text-white">
                        <h1 className="mb-2 text-7xl font-bold uppercase font-cinZel">
                            {title}
                        </h1>
                        <p className="uppercase font-cinZel text-xl font-semibold">
                            {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageCover;
