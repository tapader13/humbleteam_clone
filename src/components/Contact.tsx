import { Box, Input, Tab, Tabs } from '@mui/material';
import { contactTabData } from '../data/DymmyData';
const ariaLabel = { 'aria-label': 'description' };
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
const Contact = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <div>
      <div className=' grid grid-cols-2 md:grid-cols-1 md:gap-5 px-10 py-14'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.4 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className=' text-5xl lg:text-4xl font-radio tracking-tight'>
            Humbleteam is ready for you. Are you ready for Humbleteam?
          </h1>
        </motion.div>
        <div className=''>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1 },
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              paddingBottom: '10px',
            }}
            noValidate
            autoComplete='off'
          >
            <Input
              sx={{ width: '47%', fontSize: '20px' }}
              placeholder='Your name'
              error
              inputProps={ariaLabel}
            />
            <Input
              sx={{ width: '47%', fontSize: '20px' }}
              placeholder='Your email'
              error
              inputProps={ariaLabel}
            />
          </Box>

          <div>
            <div>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': { m: 1 },
                  paddingBottom: '10px',
                }}
                noValidate
                autoComplete='off'
              >
                <Input
                  sx={{ width: '95%', fontSize: '20px' }}
                  placeholder='A few words about your project'
                  error
                  inputProps={ariaLabel}
                />
              </Box>
            </div>
            <div className=' p-[15px]'>
              <div>
                <h1 className=' font-radio text-xl'>
                  How did you learn about us?
                </h1>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <Tabs value={value} onChange={handleChange} centered>
                    {contactTabData.map((item) => (
                      <Tab
                        sx={{
                          fontSize: '13px',
                          fontWeight: '700',
                          color: 'black',
                        }}
                        key={item.id}
                        className=' hover:text-orange-600 duration-300'
                        label={item.title}
                      />
                    ))}
                  </Tabs>
                </Box>
              </div>
            </div>
            <div className=' '>
              <button className='font-radio w-full my-5 text-white  px-6 py-3 text-xl hover:bg-orange-500 duration-300 rounded-full bg-orange-600'>
                Get in touch
              </button>
            </div>
            <div>
              <p className=' font-radio text-xl'>
                Prefer email? Reach out at{' '}
                <span className='text-orange-500'>hi@humbleteam.com.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
