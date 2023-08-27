import Img1 from 'assets/img1.svg'
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
return (
<>
<Header />
<div className="flex sm:flex-col flex-col-reverse md:flex-row md:px-[40px] md:mt-16 md-py-16 lg:flex-row lg:px-[100px] lg:items-start lg:justify-evenly lg:py-40 lg:w-full lg:mx-auto md:items-start">
    <div className="lg:max-w-[40%] max-w-[90%] px-[4%] mx-auto">
        <h1 className=" sm:text-[32px] md:text-[28px] lg:text-[42px] lg:leading-[60px] font-bold w-full text-[28px] font-serif mt-10 sm:mt-0 lg:mt-10 text-textColor">
        Get started your <span className='text-primary'> exciting journey</span> with us.
        </h1>
        <p className="text-[18px] md:text-[18px] md:leading-[24px] sm:text-[28px] mt-4 w-full leading-[20px] sm:leading-[36px] text-[#666666]">
            We believe in leaning into our curiosities. Bring the love, excitement — and sometimes craziness
            — of travel right into your home with.
        </p>
        <div
            className="block text-center font-bold text-[22px] text-white tracking-wider leading-[22px]"
            onClick={() => {
                navigate('/carbon', { replace: true})
            }}
        >
            <p className="btn w-fit mt-6 px-[24px] py-[12px] sm:px-[36px] sm:py-[16px] flex text-[18px] sm:text-[24px] sm:mx-auto md:mx-0 md:px-[24px] md:py-[12px] md:text-[18px]">
                Discover now
            </p>
        </div>
    </div>
    <div className=" px-4 w-[96%] sm:w-[480px] md:w-[360px] lg:w-[640px] mr-auto md:mt-0 lg:h-auto flex">
    <img
        src={Img1}
        alt='Home page image environment'
        className='object-contain w-full'
        />
    </div>
</div>
</>
)
}

export default Home
