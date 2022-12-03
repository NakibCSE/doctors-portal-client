import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'This is one of the best treatment in the world',
            location: 'Dhaka'

        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'This is one of the best treatment in the world',
            location: 'Dhaka'

        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'This is one of the best treatment in the world',
            location: 'Dhaka'

        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                <h2 className="text-4xl">What our patients says</h2>
                </div>
                <figure className='w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;