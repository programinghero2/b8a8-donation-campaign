import { useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";
const Donation = () => {
    const donationsData = JSON.parse(localStorage.getItem("donatons"))
    const [isShow, setShow] = useState(false)
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    isShow ? donationsData?.map(donationData => <DonationCard key={donationData.id} donationData={donationData} ></DonationCard>) :
                        donationsData?.slice(0, 4).map(donationData => <DonationCard key={donationData.id} donationData={donationData} ></DonationCard>)
                }
            </div>
            {
                !donationsData && <div className="flex lg:h-[80vh] w-full justify-center items-center">
                    <p className="bg-purple-600 text-3xl md:text-4xl font-bold text-white rounded-lg flex items-center justify-center px-5 py-5 md:w-3/5 h-2/5 ">Item Not Found</p>
                </div>
            }
            {
                isShow ? "" : donationsData?.length > 4 ? <button onClick={() => setShow(!isShow)} className="btn bg-green-600 hover:bg-green-700 text-white px-5 block mx-auto mt-8">See All</button> : ""


            }
        </div>
    );
};

export default Donation;