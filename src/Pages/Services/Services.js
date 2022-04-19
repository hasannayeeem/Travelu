import React from 'react';
import useReviews from '../../Hooks/useReviews';
import './Reviews.css'

const Services = () => {
    const [Services, setServices] = useReviews();
    return (
        <div className='reviews'>
            {
                Services.map(review => <div className='single-review'
                    key={review.id}>
                        <img src={review.image} alt=''></img>
                        <div className='des-review'>
                        <h3>{review.comments[0].user}</h3>
                        <p>{review.comments[0].text}</p>
                        <small>Rating: <span className='rating'>{review.rating}</span></small>
                        </div>
                    </div>)

            }
        </div>
    );
};

export default Services;