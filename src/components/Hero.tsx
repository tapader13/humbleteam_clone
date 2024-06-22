import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div>
      <div>
        <div className=' flex  '>
          <div className=' w-full h-[800px] overflow-hidden'>
            <video
              autoPlay
              muted
              loop
              className=' object-cover  w-full h-full  '
              src={'/static/images/herovideo.mp4'}
            ></video>
          </div>
          <div className='  left-10 sm:left-5 sm:top-[200px] top-[400px] lg:top-[300px] text-white absolute'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className=' w-[60%]  md:w-[80%] sm:w-full  font-radio text-4xl lg:text-3xl sm:text-xl md:text-[10px] font-bold'
            >
              Juicy digital-first brand systems, engaging & effective marketing
              websites & most lovable digital products.
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className='font-radio my-5  px-6 py-3 text-xl hover:bg-orange-800 rounded-full bg-orange-600'
            >
              Explore our work
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
