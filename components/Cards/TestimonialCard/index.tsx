import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { RatingStar } from '@/services/Icons/RatingStar';

interface TestimonialCardProps {
  id:number,
  name:string,
  img:any,
  comment:string,
  rating:number
}

const TestimonialCard: FC<TestimonialCardProps> = ({ id,name,img,comment,rating }) => {
  return (
    <div className={styles.testimonialCard}>
        <div className={styles.testimonialCard__img}>
            <Image src={img} alt='User Image'/>
        </div>
        <div className={styles.testimonialCard__body}>
            <div className={styles.testimonialCard__body__name}>
                <h2>{name}</h2>
            </div>
            <div className={styles.testimonialCard__body__comment}>
                <p>{comment}</p>
            </div>
            <div className={styles.testimonialCard__body__rating}>
                {Array.from({length:rating}, () => <RatingStar /> )}
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard;