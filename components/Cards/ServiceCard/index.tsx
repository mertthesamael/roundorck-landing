import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import service from "@/assets/services/service1.png"
interface ServiceCardProps {
  id:number,
  title:string,
  description:string,
  img:any
}

const ServiceCard: FC<ServiceCardProps> = ({ title,description,img }) => {
  return (
    <div className={styles.servieCard}>
        <div className={styles.servieCard__img}>
            <Image src={img} alt='Service' fill style={{objectFit:'cover'}}/>
        </div>
        <div className={styles.servieCard__content}>
            <h1>
            {title}
            </h1>
            <p>
            {description}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard;