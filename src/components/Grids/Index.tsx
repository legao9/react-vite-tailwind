import { useState, useEffect, useRef } from "react";

import Online from '../../assets/img/online.png';
import Inc from '../../assets/img/inc.png';
import Net from '../../assets/img/net.png';
import Me from '../../assets/img/me.png';
import Shop from '../../assets/img/shop.png';
import Bg1 from '../../assets/img/bg1.png';
import Bg2 from '../../assets/img/bg2.png';
import Bg3 from '../../assets/img/bg3.png';
import Bg4 from '../../assets/img/bg4.png';
import Sli01 from '../../assets/img/sli01.png';
import Sli02 from '../../assets/img/sli02.png';
import Sli03 from '../../assets/img/sli03.png';
import Sli04 from '../../assets/img/sli04.png';
import Sli05 from '../../assets/img/sli05.png';
import Sli06 from '../../assets/img/sli06.png';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function Body() {
  const a = useInterval(async () => updatesMargin(), 20);
  const Services: string[] = ['Domains', 'Email & Microsoft365', 'SSL Security', 'Website Design Services', 'Websites', 'Online Store', 'WordPress', 'Web Hosting'];
  const images = [Sli01, Sli02, Sli03, Sli04, Sli05, Sli06, Sli01, Sli02, Sli03, Sli04, Sli05, Sli06];
  const [count, setCount] = useState(0);

  const updatesMargin = () => {
    if (Number(localStorage.getItem('count')) >= 200) {
      const tmp0 = Number(localStorage.getItem('count')) - 200;
      localStorage.setItem('count', tmp0.toString());
      setCount(tmp0);
    }
    console.log(count);
    const tmp: number = Number(localStorage.getItem('count')) + .025;
    setCount(tmp);
    localStorage.setItem('count', tmp.toString());
  }


  return (
    <>
      <div className="mx-[4vw]  py-2 my-2">

        <div className="h-16 rounding-lg flex">
          <div className="w-[65%] flex">
            <input type="text" placeholder=" Type the domain you want" className="bg-[#eee] w-full pl-4 text-xl" />
            <button className="bg-[#00838C] whitespace-nowrap px-8 text-white font-semibold">Search Domain</button>
          </div>

          <div className="w-[35%] w-full mx-2 grid h-16 grid-cols-4 gap-2 hidden lg:flex flex-row">
            <div className='flex items-center justify-center gap-2 basis-1/4'>
              <img src={Online} alt="" className="w-14" />
              <span className='text-[#333] whitespace-nowrap'> $ 0.99*</span>
            </div>
            <div className='flex items-center justify-center gap-2 mt-2 basis-1/4'>
              <img src={Net} alt="" className="w-14 opacity-50" />
              <span className='text-[#333] whitespace-nowrap'> $ 14.99*</span>
            </div>
            <div className='flex items-center justify-center gap-2 basis-1/4'>
              <img src={Inc} alt="" className="w-14 opacity-50" />
              <span className='text-[#333] whitespace-nowrap'> $ 999.99*</span>
            </div>
            <div className='flex items-center justify-center gap-2 basis-1/4'>
              <img src={Me} alt="" className="w-8" />
              <span className='text-[#333] whitespace-nowrap'> $ 11.99*</span>
            </div>
          </div>
        </div>

        <div className="lg:flex md:block sm:block gap-2 my-4">
          <div className='relative lg:w-[70%] md:w-full sm:w-full relative'>
            <img src={Bg1} alt="" className='rounded-2xl' />
            <div className='absolute top-16 left-14'>
              <span className='font-[600]'>Website & Commerce </span><br />
              <span className='font-black text-[54px] font-[none]'>Tools for all your <br />business firsts.</span><br />
              <span className='font-semibold'>Website and Store solutions for any small business.</span><br />
              <span >
                <button className='my-4 bg-black text-white px-12 py-4 rounded-lg'>Get Started</button>
                <a href=""><span className='font-bold mx-6 opacity-90'>Learn More</span></a>
              </span><br />
              <span className='text-sm'>No Credit card required**</span>
            </div>

          </div>
          <div className='relative bg-[#D8EFEF] rounded-lg lg:w-[30%] md:w-[100%] sm:w-[100%]'>
            <div className='absolute top-16 left-14'>
              <span className='font-[600]'>Domain & Commerce </span><br />
              <span className='font-bold text-[32px]'>Grab a .com for just <br />$0.01*/1st yr</span><br />
              <span className='font-[400]'>2-year purchase required*</span><br />
              <button className='my-4 bg-black text-white px-16 py-4 rounded-lg'>Find Your Domain</button><br />
              <span className='font-bold opacity-90'>Transfer Your Domains</span><br />
              <span className='text-sm'>Domains include free privacy protection forever<sup>+</sup> <span className='rounded-[50%] border-[1px]'><i className='bx bx-question-mark' ></i></span> </span>
            </div>
          </div>
        </div>

        <div className='h-48 border-[1px] flex'>
          <div className='flex w-[80%] grid grid-cols-4 grid-rows-2'>
            {Services.map((item, index) => (
              <div key={index} className='text-center border-[1px] leading-[6rem]'>{item}</div>
            ))}
          </div>
          <div className='w-[20%] text-center border-[1px] flex items-center justify-center'>
            <div className=''>
              <img src={Shop} alt="no image" className='h-8 my-1 m-auto' />
              <span>Sale! $0.99*/1st yr.<br /> Attract shoppers. Sell more stuff.</span>
            </div>
          </div>
        </div>

        <div className='grid-cols-2 grid gap-8 max-w-screen-xl mx-auto my-16'>
          <div>
            <span className='font-black text-[3rem] font-[none] '>Success in <br /> 3easy steps.</span><br />
            <img src={Bg3} alt="" className='rounded-2xl mt-56 mb-16' />
            <span>02</span><br />
            <span className='text-4xl font-bold leading-[4rem]'>Save with the lowest fees</span>
            <p>2.3% + 0¢ per in-person transaction</p>
            <p>2.3% + 30¢ per online transaction</p>
            <p>Enjoy the lowestt transaction fees compared to other leading providers.</p>

            <span >
              <button className='font-black my-4 bg-black text-white px-12 py-4 rounded-lg'>Start Getting Paid</button>
              <a href=""><span className='font-bold mx-6 opacity-90'>Learn More</span> </a>
            </span><br />
          </div>

          <div>
            <img src={Bg4} alt="" className='rounded-2xl mb-16' />
            <span>01</span><br />
            <span className='text-4xl font-bold leading-[4rem]'>Sell online with a website</span>
            <p>Sell anything, from physical products to downlaods and services,</p>
            <p>and manage it all in one place.</p>
            <span >
              <button className='font-black my-4 bg-black text-white px-12 py-4 rounded-lg'>Get Started</button>
              <a href=""><span className='font-bold mx-6 opacity-90'>Learn More</span> </a>
            </span><br />

            <img src={Bg2} alt="" className='rounded-2xl my-10' />
            <span className='leading-[4rem]'>03</span><br />
            <span className='text-4xl font-bold '>Sell in-person and on the <br />go</span>
            <div className='mt-6'>
              <p>Our new Point of Sale devices are designed to fit any business and</p>
              <p>budget. Choose the one that's right for you.</p>
            </div>
            <span >
              <button className='font-black my-4 bg-black text-white px-12 py-4 rounded-lg'>Learn More</button>
            </span><br />
          </div>
        </div>
      </div>

      <div className='bg-[#eee]  py-16 relative'>
        <div className='bg-[#eee] mx-[4vw] align-middle flex flex-col justify-center items-center'>
          <h1 className='text-[3rem] font-bold'>Templates designed to sell.</h1>
          <p className='leading-[3rem]'>Choose from 100s of designs for every idea and industry.</p>
        </div>

        {/* slider section*/}

        <div className="h-[28rem] overflow-x-hidden relative">
          <div className="flex gap-16 w-max absolute" style={{ left: `-${count}%` }}>
            {images.map((item, index) => (
              <div className="w-auto object-cover">
                <img key={index} src={item} alt="hidden image" className="h-[28rem] w-auto object-cover" />
                <div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="w-full flex justify-center align-middle my-8">
          <button className='font-black bg-black text-white px-12 py-4 rounded-lg'>Learn More</button>
        </span>
      </div>
    </>

  );
}

export default Body;