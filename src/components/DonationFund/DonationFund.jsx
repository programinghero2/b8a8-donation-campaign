import DonationFundCard from "../DonationFundCard/DonationFundCard";

const DonationFund = ({donationDetails,changeItem}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                changeItem.length > 0 ? changeItem.map(donationDetail => <DonationFundCard donationDetail = {donationDetail} key={donationDetail.id}></DonationFundCard>) :
                donationDetails.map(donationDetail => <DonationFundCard donationDetail = {donationDetail} key={donationDetail.id}></DonationFundCard>)
            }
        </div>
    );
};

export default DonationFund;