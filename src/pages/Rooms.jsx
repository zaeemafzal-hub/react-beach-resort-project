import React from 'react';
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import RoomsContainer from '../Components/RoomsContainer';
export const Rooms = () => {
  return (
    <>
    <Hero hero='roomsHero'>
      <Banner title='our rooms'>
        <Link to='/' className='btn-primary'>
          Return Home
        </Link>
      </Banner>
    </Hero>
<RoomsContainer />

    </>
  );
};
