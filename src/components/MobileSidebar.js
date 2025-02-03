import Link from 'next/link'
import React, { useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
// import Button from '../atoms/Button';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { landingPageLinks } from '@/json/navLinks';



const MobileSidebar = ({ sidebar, handleClose }) => {
    const router = useRouter()


    const backgroundHidden = () => {
        if (sidebar) {
            return (document.body.style.overflow = 'hidden')
        } else {
            return (document.body.style.overflowY = 'auto')
        }
    }

    useEffect(() => {
        backgroundHidden()
    }, [sidebar])

    return (
        <div className={`lg:hidden fixed top-0 ${sidebar ? 'right-0' : '-right-[100%]'} w-full h-screen z-[1000] filter backdrop-blur-[4px]`
        }>
            <div className={`flex flex-col justify-center items-start space-y-6 lg:hidden bg-backgroundLight fixed top-0 ${sidebar ? 'right-0' : '-right-[70%]'} w-[70%] h-screen z-[1000] transition-all`}>
                <IoMdClose color='#1E1E1E' size='30px' className='absolute top-6 right-6' onClick={() => handleClose()} />
                {landingPageLinks?.map((data, idx) => {
                    return (
                        // <Link href={data?.path} key={idx} className={` w-[80%] mx-auto text-center text-xl rounded py-2 font-medium ${data?.title == 'Home' ? 'text-custom-white bg-primary-dark' : 'text-secondary'}`}>
                        //   {data?.title}
                        // </Link>
                        // <Button key={idx} disabled={false} btnLabel={data?.title} btnCss={` w-[80%] mx-auto text-center !text-xl rounded py-2 font-medium ${data?.path == router?.pathname ? 'text-custom-white bg-primary-dark' : 'text-secondary !bg-custom-white'}`} icon={undefined} iconCss={''} onClick={() => {
                        //      router?.push(data?.path)
                        //       handleClose()
                        //  }} /> 
                        <Button variant="link">
                            {data?.title}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileSidebar