import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.jpeg"
import AVTR2 from "../../assets/avatar2.jpeg"
import AVTR3 from "../../assets/avatar3.jpeg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ștefan Mihalache',
    review: 'I have worked with Mihai throughout the first 2 years of university, but when he asked me to take part in his team in game development, I jumped at the chance. His ability to head the team was nearly as good as his ability to resolve the entire multiplayer side of our game, and his expertise allowed him to help out the other team members should a problem arise. I can personally attest to his coding skills, but his ability to work well in a team is really astounding.'
  },
  {
    avatar: AVTR2,
    name: 'Lorena Petre',
    review: 'I had the pleasure of being part of the team led by Mihai and I believe that this experience helped me discover new things about him. In addition to the fact that he is a sociable person, who cares that everyone agrees with the choices he makes, I also discovered the fact that he is an organized person, who knows how to motivate people even in difficult situations. Also, I consider that he is a person who gets involved 100% in what he does and will help you at any time. He is also a great team member, a natural leader with a great attitude and he is always willing to help another colleague.'
  },
  {
    avatar: AVTR3,
    name: 'Claudiu Staicu',
    review: 'Mihai was my project manager for Club Capybara. He made a really good job in this aspect. He managed to distribute our team in departments and assign everyone the right tasks. Also, he helped us everytime we needed it, may it be a technical problem, or a design problem, he was there. He helped me understand the basics of Unity and managed to teach me the concepts of that we needed.' 
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