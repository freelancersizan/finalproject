import React from 'react';
import clock from '../../../../../assets/icons/clock.svg';
import phone from '../../../../../assets/icons/phone.svg';
import mark from '../../../../../assets/icons/marker.svg';

const Bcard = () => {
    return (
        <div className='flex justify-between my-6'>
            <div className="">
                <div className="hero rounded-md bg-primary">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='' src={clock} />
                        <div>
                            <h1 className="text-xl font-bold">Opening Hours</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="hero rounded-md bg-accent">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='' src={mark} />
                        <div>
                            <h1 className="text-xl font-bold">Opening Hours</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in.  .</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="hero rounded-md bg-primary">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='' src={phone} />
                        <div>
                            <h1 className="text-xl font-bold">Opening Hours</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in.  </p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Bcard;