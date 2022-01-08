import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
    
        <div className='bg-info mb-5 p-2 fixed'>
            <Container>
            <img style={{ width: '65px', display: 'inline', padding: '0 5px' }} src="https://cdn.pixabay.com/photo/2020/04/29/08/24/coronavirus-5107804_640.png" alt="" />
              <span style={{fontSize: '20px', fontWeight: '600'}} className='text-white'>COVID-19-Dashboard</span>
            </Container>
            
        </div>
    );
};

export default Header;