import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import Button from '../components/Services';

export const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'
        >
          <Link to='/rooms' className='btn-primary'>
            our Rooms
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Services />
      {/* <Button /> */}
    </>
  );
};
