import { CardData1 } from '../data/DymmyData';
import { motion } from 'framer-motion';

const CardTwo = () => {
  return (
    <div>
      <div>
        <div>
          <div className=' grid grid-cols-3  md:grid-cols-1 gap-5 px-10'>
            {CardData1.map((item) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1, duration: 0.4 },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className=' mx-3 group'
                  key={item.id}
                >
                  <div className=' overflow-hidden rounded-xl'>
                    <img
                      className=' rounded-xl cursor-pointer duration-300 group-hover:scale-[1.1]'
                      src={item.img}
                      alt=''
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.4 },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className=' py-5'
                  >
                    <p className=' flex items-center gap-4'>
                      <span className=' cursor-pointer'>
                        <img className=' ' src={item.icon} alt='' />
                      </span>
                      <span className=' cursor-pointer font-radio text-xl'>
                        {item.brand}
                      </span>
                      <span className=' cursor-pointer text-gray-500 font-radio text-lg'>
                        {item.company}
                      </span>
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.4 },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className=' mb-2'
                  >
                    <h1 className='group-hover:text-orange-500 duration-300 font-radio text-3xl tracking-tight cursor-pointer'>
                      {item.title}
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.4 },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    className=' mb-2'
                  >
                    <p className=' cursor-pointer font-radio text-gray-500 text-xl tracking-wade'>
                      {item.text}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
