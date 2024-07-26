import 'boxicons'
import Logo from '../../assets/svg/logo.svg';
interface HeaderProps {
  name: string
}

function Header(props: HeaderProps) {
  return (
    <div className='px-[4vw] h-18 w-full flex '>      

      <div className='my-2 flex items-center'>
        <img src={Logo} alt="logo" className='h-8 w-36 mr-6 cursor-pointer' />
        <div className='font-semibold text-gray-500 flex'>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] lg:block hidden cursor-pointer'><span>Domain Names</span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] lg:block hidden cursor-pointer'><span>Websites $ Hosting</span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] lg:block hidden cursor-pointer'><span>Commerce</span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] lg:block hidden cursor-pointer'><span>Email & Marketing</span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] lg:block hidden cursor-pointer'><span>Expert Services </span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] lg:block hidden cursor-pointer'><span>More</span></div>
        </div>
        <div className='font-semibold text-gray-600 absolute right-20 flex'>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] cursor-pointer'><span className='lg:block md:hidden sm:hidden'>Help Center</span> <span className='lg:hidden md:block sm:block'><i className='bx bx-question-mark' ></i></span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] cursor-pointer relative pr-8'><span className='lg:block md:hidden sm:hidden'>Sign In <i className='absolute text-3xl top-0.5 bx bx-chevron-down'></i> </span> <span className='lg:hidden md:block sm:block'><i className='bx bx-user'></i></span></div>
          <div className='leading-8 px-2 py-1 rounded-lg hover:bg-[#ddd] cursor-pointer'> <i className='bx bx-cart' ></i> </div>
        </div>
      </div>

    </div>
  );
}

export default Header;