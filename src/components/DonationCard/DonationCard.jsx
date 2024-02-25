import { Link } from "react-router-dom";

const DonationCard = ({ donationData }) => {
    const { id,img, category, title, category_color, card_color, cart_text_color, price } = donationData
    return (
        <div>
            <div className="card card-compact flex-col lg:flex-row  gap-5" style={{ backgroundColor: card_color }} >
                <figure><img className=" h-[300px] lg:h-[194px]  w-full lg:w-[300px] rounded" src={img} alt="Shoes" /></figure>
                <div className=" mt-5 mb-5 space-y-1 pr-5 flex-1 text-center lg:text-left lg:mb-0 ">
                    <h2 className="w-20 text-center rounded-sm mx-auto lg:m-0 text-sm font-medium" style={{ backgroundColor: category_color,color:cart_text_color }}>{category}</h2>
                    <p className="text-[20px] font-semibold">{title}</p>
                    <p className="m-0" style={{ color: cart_text_color }}>${price}</p>
                    <Link to={`/donationDetails/${id}`}>
                        <button className="btn mt-3 lg:mt-8 text-white border-none rounded-none" style={{ backgroundColor: cart_text_color, borderRadius: "3px" }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;