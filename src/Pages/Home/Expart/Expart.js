// import React from 'react';

// const Service = ({ service }) => {
//     const { name, img } = service;
//     return (
//         <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
//             <div className="card" style={{width: "18rem"}}>
//             <img src={img} className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Service;



// import React from 'react';
// import expart1 from '../../../images/experts/expert-1.jpg';
// import expart2 from '../../../images/experts/expert-2.jpg';
// import expart3 from '../../../images/experts/expert-3.jpg';
// import expart4 from '../../../images/experts/expert-4.jpg';
// import expart5 from '../../../images/experts/expert-5.jpg';
// import expart6 from '../../../images/experts/expert-6.jpg';
// import Service from '../Expart/Expart';


// const services = [
//     {id: 1, name: 'iceLand', img: expart1},
//     {id: 2, name: 'Dubai', img: expart2},
//     {id: 3, name: 'istanbul', img: expart3},
//     {id: 4, name: 'Kashmir', img: expart4},
//     {id: 5, name: 'Juflong', img: expart5},
//     {id: 6, name: 'Chottogram', img: expart6}
// ];

// const Services = () => {
//     return (
//         <div id='services' className='container'>
//             <h2 className='text-primary text-center mt-5'>Our Services</h2>
//             <div className='row'>
//                 {
//                     services.map(service => <Service
//                         key={service.id}
//                         service={service}
//                     ></Service>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Services;