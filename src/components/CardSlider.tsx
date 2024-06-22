import { sliderData2 } from '../data/DymmyData';
import Marquee from 'react-fast-marquee';

const CardSlider = () => {
  return (
    <div>
      <div className='pt-10 px-10'>
        <div>
          <h1 className='text-5xl md:text-3xl font-radio tracking-tight'>
            Recognised by global leaders
          </h1>
        </div>
        <div className='flex items-center pt-10'>
          <Marquee gradient={false} speed={80} pauseOnHover>
            {sliderData2.map((item, i) => {
              return (
                <div key={i} className='flex-shrink-0 w-80 mx-4'>
                  <div className='tracking-wide p-5 bg-gray-100 rounded-2xl text-3xl md:text-2xl font-radio'>
                    <p>{item.data}</p>
                  </div>
                  <div className='my-4 flex justify-start gap-4'>
                    <div>
                      <img
                        src={item.img}
                        alt={item.company}
                        className='w-16 h-16'
                      />
                    </div>
                    <div className='font-radio'>
                      <h1>{item.title}</h1>
                      <p className='text-gray-400'>{item.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CardSlider;
