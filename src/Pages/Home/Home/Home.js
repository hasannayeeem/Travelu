import React from 'react';
import useReviews from '../../../Hooks/useReviews/useReviews';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <h2 className='text-center mt-5 fw-bolder'>My Previous Client Review</h2>
            <div className='container customer-reviews'>
                
                {
                    reviews.slice(0,3).map(review => <Reviews 
                    key={review.id}
                    review={review}
                    ></Reviews>)
                
                }
               
            </div>   
        </>
    );
};

export default Home;