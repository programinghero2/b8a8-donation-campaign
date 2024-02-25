import { useLoaderData } from "react-router-dom";
import DonationFund from "../../components/DonationFund/DonationFund";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
    const donationDetails = useLoaderData();
    const [changeItem,setChangeItem] = useState([])
    const getInputText = inputValue => {
        const healthArr = donationDetails.filter(item => item.category === inputValue)
        setChangeItem(healthArr)
    }
    return (
        <div>
           <Banner getInputText={getInputText}></Banner>
           <DonationFund donationDetails={donationDetails} changeItem = {changeItem}></DonationFund>
        </div>
    );
};

export default Home;