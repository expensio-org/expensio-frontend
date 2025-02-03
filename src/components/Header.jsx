'use client'

import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { landingPageLinks } from "@/json/navLinks.js";
import MobileSidebar from "./MobileSidebar";
import Image from "next/image";
import LogoWhite from "../../public/assets/logo-white.svg"


const Header = () => {
    const [stickyNav, setStickyNav] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const router = useRouter();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 2) {
                setStickyNav(true);
            } else {
                setStickyNav(false);
            }
        });
    }, []);

    return (
        <header className="sticky top-0 mx-auto z-10 ">
            <nav>
                <div className="flex justify-between items-center p-6 xl:p-0 xl:py-6 ">
                    <div className="flex justify-between lg:justify-start items-center w-full">
                        <Link href={"/"} className="flex justify-center items-center">
                            {/* logo */}
                            <Image src={LogoWhite} alt="logo" width={140} height={140} />
                        </Link>
                        {/* Mv  hamburger icon */}
                        <CgMenuRight
                            color="#F5F5F5"
                            size="2rem"
                            className="lg:hidden"
                            onClick={() => setSidebar(true)}
                        />
                        <div className="space-x-10 ml-20 hidden lg:block">
                            {landingPageLinks?.map((data, idx) => (
                                <Link
                                    href={data?.path}
                                    key={idx}
                                    className={` text-sm font-medium ${data?.path == router.pathname ? "text-primary" : "text-backgroundLight"
                                        }`}
                                >
                                    {data?.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Dv nav link */}
                    <div className="hidden lg:flex justify-center items-center space-x-4">
                        {/* <Button
                                btnLabel="Get Started"
                                icon={<FaArrowRight color="#FFF" sixe="14px" />}
                                disabled={false}
                                btnCss={""}
                                iconCss={""}
                                onClick={() => router.push("/signin")}
                            /> */}
                        {router.pathname != "/signin" && (
                            <Button variant="outline">
                                Login
                            </Button>
                        )}
                        <Button variant="default">
                            Get Started
                        </Button>
                    </div>
                </div>
            </nav>


            {/* Mobile Side Bar */}
            <MobileSidebar sidebar={sidebar} handleClose={() => setSidebar(false)} />
        </header>
    );
};

export default Header;
