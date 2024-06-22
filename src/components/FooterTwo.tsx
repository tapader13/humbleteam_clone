import { footerData } from '../data/DymmyData';

const FooterTwo = () => {
  return (
    <div className=' px-10'>
      <div className=' grid grid-cols-4 lg:grid-cols-2 '>
        <div className=' p-2 col-span-3 lg:col-span-1 gap-5  flex flex-wrap items-center  justify-between'>
          {footerData.map((item) => {
            return (
              <div key={item.id}>
                <p className=' font-radio text-2xl'>{item.country}</p>
                <p className='font-radio text-xl text-orange-600'>
                  {item.email}
                </p>
                <p className=' mt-3 duration-300 font-radio text-xl hover:text-gray-400'>
                  {item.phone}
                </p>
                <p className=' font-radio text-xl duration-300 hover:text-orange-600'>
                  {item.area}
                </p>
              </div>
            );
          })}
        </div>
        <div className=' col-span-1 sm:hidden lg:h-[200px] bg-gray-100 rounded-2xl p-4'>
          <div>
            <div className=' flex gap-2'>
              <div>
                <img src='/static/images/footer-podcast.svg' alt='' />
              </div>
              <div className=' font-bold'>
                <p>Featured on</p>
                <p className=' text-xl'>Apple Podcast</p>
              </div>
              <div></div>
            </div>
            <div className=' flex justify-between items-center'>
              <div>
                <p className=' font-radio text-xl'>Tune in to our podcast </p>
                <p className=' font-radio text-2xl tracking-tight text-orange-600'>
                  CTRL SHIFT
                </p>
              </div>
              <div>
                <img src='/static/images/microphone.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
