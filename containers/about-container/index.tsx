import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import aboutbg from "@/assets/aboutbg.webp"
import { Grass } from '@/services/Icons/Grass';
import { AboutTexts } from './constants';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
interface AboutSectionProps {
  
}

const AboutSection: FC<AboutSectionProps> = ({  }) => {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.aboutSection__title}>
            <h1>About Us</h1>
            <Grass />
        </div>
        <div className={styles.aboutSection__content}>
            <Image src={aboutbg} alt='Background Image' fill style={{objectFit:'cover'}} />
            <div className={styles.aboutSection__content__info}>
            {AboutTexts.map((el,_i) => <p key={_i}>{el.content}</p>)}
            </div>
            <div className={styles.aboutSection__content__button}>
                <PrimaryButton text='Help Me'/>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;