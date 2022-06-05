import React from 'react';
import './Reviews.css'
const Reviews = (props) => {
    console.log(props.review);
    const {rating, comments, image} = props.review;
    return (
        <div className='review-card'>
            <img src={image} alt=""></img>
            <h4>{comments[0].user}</h4>
            <p>Rating: <span className='rating'>{rating}</span></p>
            <h5 className='text-muted fs-6'>{comments[0].text}</h5>  
        </div>
    );
};

export default Reviews;