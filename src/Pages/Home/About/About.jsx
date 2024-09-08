import serviceImg from "../../../assets/home/chef-service.jpg";

const About = () => {
    return (
        <div
            className={`bg-cover bg-center w-full p-28 mb-24`}
            style={{ backgroundImage: `url(${serviceImg})` }}
        >
            <div className="px-36 py-20 bg-white/90 text-black">
                <h1 className="text-3xl font-medium uppercase text-center font-serif">
                    Restro Flow
                </h1>
                <p className="text-center mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, libero accusamus laborum deserunt ratione
                    dolor officiis praesentium! Deserunt magni aperiam dolor
                    eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default About;
