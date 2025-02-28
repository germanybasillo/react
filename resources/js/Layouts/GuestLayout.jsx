import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
             {/* FLEX CONTAINER TO ALIGN LOGOS & FORM */}
            <div className="flex flex-col items-center">  
            {/* <div className="flex flex-col items-center self-end mr-10">   */}
                {/* LOGO SECTION - Centered Above Form */}
                {/* <Link href="/" className="flex items-center justify-center space-x-4 mb-4"> */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                    {/* TESDA Logo */}
                    <img 
                        src="/images/tesdabg.gif" 
                        alt="TESDA Logo" 
                        className="w-24 sm:w-40 h-auto"
                    />

                    {/* Bagong Pili Logo */}
                    <img 
                        src="/images/bagongpili.png" 
                        alt="Bagong Pili Logo" 
                        className="w-24 sm:w-40 h-auto"
                    />
                </div>
                {/* </Link> */}

                {/* FORM SECTION - Custom Width & Centered with Logos */}
                <div className="w-[400px] sm:w-[500px] px-6 py-4 bg-blue-400 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}







