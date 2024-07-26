
import Logo from '../../assets/img/white.png';

function Footer() {
  const aboutGodaddy: string[] = ['About Us', 'Newsroom', 'Investor Realatons', 'Careers', 'Corprate Resonsibility', 'Trust Center', 'Legal'];
  const helpCenter: string[] = ['Help Center', 'Community', 'Venture Forward: Microbusiness Data', 'GoDaddy Blog', 'Contact Us', 'Report Abuse', 'Resources'];
  const resources: string[] = ['webmail', 'WHOIS', 'GoDaddy Mobile App', 'ICANN Confirmation', 'Designers & Developers', 'Coperate Domains', 'Redeem Code', 'Product Catalog', 'Videos', 'Business Name Generator'];
  const partnerProgram: string[] = ['Affiliates', 'Reseller Program', 'GoDaddy Pro'];
  const account: string[] = ['My products, Renewals & Builling', 'Create Account'];
  const shopping: string[] = ['Buy a Domain', 'Websites', 'WordPress', 'Hosting', 'Web Security', 'Email & Office', 'Phone Numbers', 'Promos'];

  return (
    <div className='bg-[#222]'>
      <div className='bg-[#222] h-18 gap-16 grid grid-cols-2 text-white border-b'>
        <div className=" p-8">
          <span className='text-[24px] leading-[4rem]'>Sign up for news and speical offers</span> <br />
          <div className="flex ">
            <input type="text" placeholder="Email address" className="pl-4 bg-[#333] w-full text-xl  focus:outline-none" />
            <button className='bg-white text-black px-16 py-4 whitespace-nowrap'>Sign Up</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8">
          <span className='text-[24px] leading-[4rem] text-gray-400'>We love talking your all.</span> <br />
          <div className='flex'>
            <img src={Logo} alt="" className='h-16 mt-[-1rem] ml-[-12px]' />
            <span className='text-[24px]'> guides</span>

          </div>
        </div>
      </div>
      <div className='gap-16 grid grid-cols-6 text-gray-400 py-8'>
        <div className='px-8'>
          <h3 className='text-[1.2rem] text-white leading-[3rem]'>ABout Godaddy</h3>
          {aboutGodaddy.map((item, index) => (
            <a className='cursor-pointer text-sm' key={index}>{item} <br /></a>
          ))}
        </div>
        <div className='px-8'>
          <h3 className='text-[1.2rem] text-white leading-[3rem]'>Help Center</h3>
          {helpCenter.map((item, index) => (
            <a className='cursor-pointer text-sm' key={index}>{item}<br /></a>
          ))}
        </div>
        <div className='px-8'>
          <h3 className='text-[1.2rem] text-white leading-[3rem]'>Resources</h3>
          {resources.map((item, index) => (
            <a className='cursor-pointer text-sm' key={index}>{item}<br /></a>
          ))}
        </div>
        <div className='px-8'>
          <h3 className='text-[1.2rem] text-white leading-[3rem]'>Printer Programs</h3>
          {partnerProgram.map((item, index) => (
            <a className='cursor-pointer text-sm' key={index}>{item}<br /></a>
          ))}
        </div>
        <div className='px-8'>
          <h3 className='text-[1.2rem] text-white leading-[3rem]'>Account</h3>
          {account.map((item, index) => (
            <a className='cursor-pointer text-sm' key={index}>{item}<br /></a>
          ))}
        </div>
        <div className='px-8'>
          <h3 className='text-[1.2rem] text-white leading-[3rem]'>Shopping</h3>
          {shopping.map((item, index) => (
            <a className='cursor-pointer text-sm' key={index}>{item}<br /></a>
          ))}
        </div>
      </div>

      <div>
        

      </div>
    </div>
  );
}

export default Footer;