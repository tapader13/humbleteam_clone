import Marquee from 'react-fast-marquee';

const LogoSlider = () => {
  return (
    <div className='my-6'>
      <hr />
      <div className=' items-center flex flex-row py-10 '>
        <Marquee>
          <img src='/static/images/deolitte.svg' alt='1' />

          <img className='' src={'/static/images/accenture.svg'} alt='2' />

          <img src={'/static/images/deolitte.svg'} alt='3' />

          <img src={'/static/images/ibm.svg'} alt='4' />

          <img src={'/static/images/mckinsey.svg'} alt='5' />

          <img src={'/static/images/rimac.svg'} alt='6' />

          <img src={'/static/images/accenture.svg'} alt='7' />

          <img src={'/static/images/seedstars.svg'} alt='8' />
        </Marquee>
      </div>
      <hr />
    </div>
  );
};

export default LogoSlider;
