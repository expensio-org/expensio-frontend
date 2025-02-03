import Image from "next/image";
import MasterCard from '../../public/assets/master-card.png'

const Footer = () => {
    return (
        <footer className="text-backgroundLight py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

                {/* Copyright */}
                <p className="text-sm text-center md:text-left">
                    Copyright © 2025 Expensio
                </p>

                {/* Links */}
                <div className="flex flex-wrap justify-center space-x-4 text-sm mt-3 md:mt-0">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">FAQs</a>
                    <a href="#" className="hover:underline">Help Center</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                </div>

                {/* Payment Icons */}
                <div className="flex space-x-3 mt-3 md:mt-0">
                    <Image src={MasterCard} alt="MasterCard" width={40} height={25} />
                    <Image src={MasterCard} alt="Verve" width={40} height={25} />
                    <Image src={MasterCard} alt="Visa" width={40} height={25} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
