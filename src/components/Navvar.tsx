import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { navbarData } from '../data/DymmyData';
const Navvar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const [open, setOPen] = useState(false);
  const handleMenu = () => {
    setOPen(!open);
  };
  return (
    <div>
      <div>
        <div
          className={`flex z-20 fixed w-full flex-row justify-between  items-center  px-10 py-5 ${
            scroll ? 'text-black bg-white' : ' bg-transparent text-white'
          } lg:hidden`}
        >
          <div className='flex items-center '>
            <h1 className=' font-radio font-bold text-3xl'>humbleteam </h1>{' '}
            <span className=' h-4 w-4 rounded-full bg-orange-600 ml-1'></span>
          </div>
          <div className=' flex justify-around gap-6 '>
            {navbarData.map((item) => {
              return (
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className='hover:text-orange-500 cursor-pointer  font-bold font-radio tracking-wide text-xl'
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            <button
              className={`font-radio border border-white px-4 py-2 rounded-full  ${
                scroll ? 'bg-orange-600' : 'hover:bg-black'
              }`}
            >
              Get in touch
            </button>
          </div>
        </div>
        {/* for mobile screen */}
        <div className=' flex flex-col'>
          <div
            className={`lg:flex z-20 fixed w-full flex-row justify-between  items-center  px-10 py-5  bg-black text-white
             hidden `}
          >
            <div className='flex items-center '>
              <h1 className=' font-radio font-bold text-3xl'>humbleteam </h1>{' '}
              <span className=' h-4 w-4 rounded-full bg-orange-600 ml-1'></span>
            </div>
            <div>
              {open ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className=' h-6 w-6 cursor-pointer'
                  fill={'white'}
                  onClick={handleMenu}
                  viewBox='0 0 384 512'
                >
                  <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
                </svg>
              ) : (
                <svg
                  className=' h-6 w-6 cursor-pointer'
                  fill={'white'}
                  onClick={handleMenu}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
                </svg>
              )}
            </div>
          </div>

          {open && (
            <div className='hidden lg:flex flex-col items-start bg-black text-white py-20 px-10 z-10 fixed inset-0'>
              {navbarData.map((item) => {
                return (
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    onClick={() => setOPen(false)}
                    className='hover:text-orange-500 cursor-pointer  font-bold font-radio tracking-wide mt-5 text-xl'
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navvar;
