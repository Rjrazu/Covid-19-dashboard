import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 p-3 bg-info'>
            <div className=' text-center text-white'>
                <small>COVID-19 &copy; Copy-Right {new Date().toLocaleDateString().slice(4, 8)}</small>
            </div>
        </div>
    );
};

export default Footer;