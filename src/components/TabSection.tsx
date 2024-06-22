import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { sliderData } from '../data/DymmyData';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TabSection = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
  };

  const tabContentVariants = {
    initial: { opacity: 0, y: 20, scale: 0 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0 },
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className='text-7xl  md:text-3xl font-radio px-10 py-16'
            >
              We are a leading digital agency with global reach & services for
              all stages of your product’s lifecycle.
            </motion.p>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                    sx={{ justifyContent: 'space-around' }}
                  >
                    {sliderData.map((item) => (
                      <Tab
                        key={item.id}
                        label={item.title}
                        sx={{
                          '&:hover': {
                            color: 'orange',
                          },
                          '&.Mui-selected': {
                            color: 'orange',
                            fontWeight: 'bold',
                          },
                        }}
                        value={item.id}
                      />
                    ))}
                  </TabList>
                </Box>
                <div className='grid grid-cols-2 lg:grid-cols-1 px-8 items-center'>
                  <div>
                    {sliderData.map((item) => (
                      <TabPanel
                        key={item.id}
                        className='text-5xl lg:text-4xl tracking-wide font-radio'
                        value={item.id}
                      >
                        <motion.div
                          initial='initial'
                          animate='animate'
                          exit='exit'
                          variants={tabContentVariants}
                          transition={{ duration: 3, type: 'spring' }}
                        >
                          {item.text}
                        </motion.div>
                      </TabPanel>
                    ))}
                    <div>
                      {sliderData.map((item) => (
                        <TabPanel key={item.id} value={item.id}>
                          <motion.div
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            variants={tabContentVariants}
                            transition={{ duration: 3, type: 'spring' }}
                          >
                            <p className='flex text-xl my-1 tracking-tight items-baseline'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                                className='h-4 w-4 mr-2'
                              >
                                <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                              </svg>
                              <span>{item.list1}</span>
                            </p>
                            <p className='flex text-xl my-1 tracking-tight items-baseline'>
                              <svg
                                className='h-4 w-4 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                              >
                                <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                              </svg>
                              <span>{item.list2}</span>
                            </p>
                            <p className='flex text-xl my-1 tracking-tight items-baseline'>
                              <svg
                                className='h-4 w-4 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                              >
                                <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                              </svg>
                              <span>{item.list3}</span>
                            </p>
                          </motion.div>
                        </TabPanel>
                      ))}
                      <div>
                        <button className='font-radio my-5 ml-2 px-6 py-3 text-xl hover:bg-orange-500 rounded-full bg-orange-600'>
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    {sliderData.map((item) => (
                      <TabPanel key={item.id} value={item.id}>
                        <motion.div
                          initial='initial'
                          animate='animate'
                          exit='exit'
                          variants={tabContentVariants}
                          transition={{ duration: 3, type: 'spring' }}
                        >
                          <img
                            className='rounded-xl h-full'
                            src={item.img}
                            alt=''
                          />
                        </motion.div>
                      </TabPanel>
                    ))}
                  </div>
                </div>
              </TabContext>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
