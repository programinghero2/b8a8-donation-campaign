import { Link } from "react-router-dom";

const DonationFundCard = ({ donationDetail }) => {
    const { id,img, category, title, category_color, card_color, cart_text_color } = donationDetail
    return (
        <Link to={`/donationDetails/${id}`}>
            <div className="card card-compact" style={{ backgroundColor: card_color }} >
                <figure><img className="h-[194px] w-full" src={img} alt="donation-img" /></figure>
                <div className="card-body">
                    <h2 className="w-2/5 text-center rounded-sm text-sm font-medium" style={{ backgroundColor: category_color,color:cart_text_color }}>{category}</h2>
                    <p className="text-[20px] font-semibold" style={{ color: cart_text_color }}>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default DonationFundCard;