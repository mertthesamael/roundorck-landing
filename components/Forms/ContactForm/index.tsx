"use client"
import SecondaryButton from '@/components/Buttons/SecondaryButton'
import PrimaryInput from '../Inputs/PrimaryInput'
import styles from './style.module.scss'
import React, { FC } from 'react'

interface ContactFormProps {
  
}

const ContactForm: FC<ContactFormProps> = ({  }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.contactForm}>
        <PrimaryInput placeholder='Name'/>
        <PrimaryInput placeholder='Surname'/>
        <PrimaryInput placeholder='Mail'/>
        <SecondaryButton text='Send'/>
    </form>
  )
}

export default ContactForm;


