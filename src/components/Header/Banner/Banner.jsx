import bannerImg from "../../../assets/banner.jpg"

const Banner = ({ getInputText }) => {
    const handleInputValue = e => {
        e.preventDefault()
        getInputText(e.target.name.value)
    }
    return (
        <div className="h-[80vh] mb-8 hero rounded-lg " style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover", backgroundRepeat:"no-repeat" }}>
            <div className="hero-overlay bg-opacity-40 rounded-lg"></div>
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-2xl px-5 md:text-3xl lg:text-5xl font-bold text-center text-neutral-content">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleInputValue} className="text-center mt-5 md:mt-10">
                        <input type="text" placeholder="Search here...." name="name" className=" py-[10px] md:py-[13px] outline-none border rounded-l-lg px-2 border-gray-400 w-48  md:w-96 rounded-r-none" />
                        <button className=" py-[10px] md:py-[13px] px-6 bg-[#FF444A] hover:bg-[#FF444A] border-none text-white rounded-l-none rounded-r-lg">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;