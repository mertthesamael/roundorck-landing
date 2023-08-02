import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import herobg from '@/assets/herobg.png';
import { Logo } from '@/services/Icons/Logo';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({  }) => {
  return (
    <section className={styles.heroSection}>
        <Image src={herobg} alt='Hero Bg' fill style={{objectFit:'cover'}}/>
        <div className={styles.heroSection__inner}>
        <div className={styles.heroSection__inner__logo}>
            <Logo />
            <div className={styles.heroSection__inner__logo__name}>
                <h1>Round Rock</h1>
                <p>Yard Maintanence</p> 
            </div>
        </div>
        <div className={styles.heroSection__inner__title}>
            <h1>Lorem ipsum Lorem</h1>
        </div>
        <div className={styles.heroSection__inner__button}>
            <PrimaryButton text='Help Me' />
        </div>
        </div>
    </section>
  )
}

export default HeroSection;