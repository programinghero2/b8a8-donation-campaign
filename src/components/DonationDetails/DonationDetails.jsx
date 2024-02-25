import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const DonationDetails = () => {
    const donations = useLoaderData();
    const { Id } = useParams()
    const donation = donations.find(donationInfo => donationInfo.id === +Id)
    const { img, title, cart_text_color, description, price } = donation
    const handleLocalStorage = () => {
        const donationItemArr = [];
        const getDataToLs = JSON.parse(localStorage.getItem("donatons"))
        if (!getDataToLs) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'You Donate Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            donationItemArr.push(donation)
            localStorage.setItem("donatons", JSON.stringify(donationItemArr))
        }
        else {
            const isExist = getDataToLs.find(item => item.id == donation.id)
            if (!isExist) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Donate Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                donationItemArr.push(...getDataToLs, donation);
                localStorage.setItem("donatons", JSON.stringify(donationItemArr))
            }
            else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Already Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }
    return (
        <div>
            <div className="hero min-h-screen mb-8 relative rounded" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay h-[100px] bg-opacity-40 absolute bottom-0">
                    <button onClick={handleLocalStorage} className="btn mt-5 ms-5 text-white border-none rounded-none" style={{ backgroundColor: cart_text_color, borderRadius: "3px" }}>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h2 className="card-title">{title}</h2>
                <p className="text-[#0b0b0bb3]">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;