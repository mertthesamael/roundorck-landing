import ContactForm from '@/components/Forms/ContactForm';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { ContactInfo } from './constants';

interface ContactSectionProps {
  
}

const ContactSection: FC<ContactSectionProps> = ({  }) => {
  return (
    <section className={styles.contactSection}>
        <div className={styles.contactSection__title}>
            <h1>Contact Us</h1>
        </div>
        <div className={styles.contactSection__info}>
            <div className={styles.contactSection__info__form}>
                <ContactForm />
            </div>
            <div className={styles.contactSection__info__details}>
                {ContactInfo.map((el,_i) => <div key={_i} className={styles.contactSection__info__details__item}><el.icon/><p>{el.value}</p></div> )}
            </div>
        </div>
    </section>
  )
}

export default ContactSection;