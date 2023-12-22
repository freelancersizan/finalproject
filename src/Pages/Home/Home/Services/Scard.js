import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const Scard = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scard;