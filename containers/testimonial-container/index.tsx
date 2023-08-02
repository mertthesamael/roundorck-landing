import TestimonialCard from '@/components/Cards/TestimonialCard';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { Testimonials } from './constants';

interface TestimonialsSectionProps {
  
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({  }) => {
  return (
    <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsSection__title}>
            <h1>Testymonials</h1>
        </div>
        <div className={styles.testimonialsSection__testimonials}>
            {Testimonials.map((el, _i) => <TestimonialCard key={_i} id={el.id} name={el.name} comment={el.comment} rating={el.rating} img={el.img} />)}
        </div>
    </section>
  )
}

export default TestimonialsSection;