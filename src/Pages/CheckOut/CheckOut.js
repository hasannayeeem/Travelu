import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    return (
        <div>
            <h2 className='text-center'>welcome to detail: {serviceId}</h2>
            <ServiceDetail></ServiceDetail>
        </div>
    );
};

export default CheckOut;