const Cta = () => {
  return (
    <div>
      <div className=' px-10 py-10 group'>
        <div className=' overflow-hidden rounded-xl'>
          <img
            className=' rounded-xl cursor-pointer group-hover:scale-[1.1] duration-300'
            src='/static/images/secondhero.jpg'
            alt=''
          />
        </div>
        <div className=' py-5 text-xl'>
          <p className=' flex items-center'>
            <span className=' mr-2'>
              <img src={'/static/images/icon1.svg'} alt='' />
            </span>
            <span className=' mr-3 cursor-pointer'>Nasa</span>
            <span className=' mr-3 text-gray-400 cursor-pointer'>
              Mobile App{' '}
            </span>
            <span className=' text-gray-400 cursor-pointer'>Branding</span>
          </p>
        </div>
        <div className='my-2'>
          <h1 className=' group-hover:text-orange-500 duration-300 cursor-pointer text-4xl tracking-tighter font-radio'>
            Running out of space
          </h1>
        </div>
        <div>
          <p className='  font-radio text-gray-400 text-xl cursor-pointer'>
            An app for NASA to optimize storage areas and resources on the
            International Space Station.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
