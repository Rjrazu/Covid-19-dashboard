import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid py-6 bg-info'>
            <div className=' text-center text-white'>
                <small>COVID Informations &copy; Copy-Right {new Date().toLocaleDateString().slice(4, 8)}</small>
            </div>
        </div>
    );
};

export default Footer;