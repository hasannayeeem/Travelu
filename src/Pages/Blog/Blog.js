import React from 'react';
import './Blogs.css'
const Blog = () => {
    return (
        <div className='div-blogs'>
            <h2>Q&A Section</h2><hr/>
            <div>
                <h2>Q1: What is Context API</h2>
                <p>
                If a child component at nth level require a property from a parent component at any level, the information needs to be passed one level by level through props. In an application with lot of nested components, it is difficult. Context API helps to directly send an information from a parent component to a child component at any level.
                </p>
            </div>
            <div>
                <h2>Q2: What is Semantic tag</h2>
                <p>
                A semantic element clearly describes its meaning to both the browser and the developer. Examples of non­semantic elements: div and span ­ Tells nothing about its content. Examples of semantic elements: 'form' table, and article ­ Clearly defines its content.
                </p>
            </div>
            <div>
                <h2>Q3: Difference between block and inline-block?</h2>
                <p>
                Difference between block and inline-block? Block Elements occupy the full width irrespective of their sufficiency. Inline elements don't start in a new line. Block elements always start in a line. Inline elements allow other inline elements to sit behind.
                </p>
            </div>
        </div>
    );
};

export default Blog;