import ServiceCard from '@/components/Cards/ServiceCard';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Services } from './constants';
import { Grass } from '@/services/Icons/Grass';

interface ServicesSectionProps {
  
}

const ServicesSection: FC<ServicesSectionProps> = ({  }) => {
  return (
    <section className={styles.servicesSection}>
        <div className={styles.servicesSection__title}>
            <h1>Services</h1>
            <Grass />
        </div>
        <div className={styles.servicesSection__cards}>
            {Services.map((el,_i) => <ServiceCard key={_i} id={el.id} title={el.title} description={el.description} img={el.img} />)}
        </div>
        <PrimaryButton text='Help Me'/>
    </section>
  )
}

export default ServicesSection;