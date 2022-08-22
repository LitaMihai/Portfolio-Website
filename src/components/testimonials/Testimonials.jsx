import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.jpeg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Claudiu Staicu',
    review: 'Mihai was my project manager for Club Capybara. He made a really good job in this aspect. He managed to distribute our team in departments and assign everyone the right tasks. Also, he helped us everytime we needed it, may it be a technical problem, or a design problem, he was there. He helped me understand the basics of Unity and managed to teach me the concepts of that we needed.'
  },
  {
    avatar: AVTR2,
    name: 'Lorena Petre',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nisi aliquam quas non, dolorum blanditiis culpa nam voluptatibus aspernatur ipsa nesciunt totam sunt repudiandae perferendis animi molestiae aperiam. Officia, dolorem!'
  },
  {
    avatar: AVTR3,
    name: 'Ștefan Mihalache',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nisi aliquam quas non, dolorum blanditiis culpa nam voluptatibus aspernatur ipsa nesciunt totam sunt repudiandae perferendis animi molestiae aperiam. Officia, dolorem!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from team members</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials