import React from 'react';
import Bannar from './Bannar/Bannar';
import Bcard from './Bannar/Bcard/Bcard';
import Scard from './Services/Scard';

const Home = () => {
    return (
        <div className='mx-6'>
            <Bannar></Bannar>
            <Bcard></Bcard>
            <Scard></Scard>
        </div>
    );
};

export default Home;