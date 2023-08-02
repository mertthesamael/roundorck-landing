import styles from './style.module.scss'
import React, { FC } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <footer className={styles.footer}>
     <p>Made with ♥, Mert ENERCAN - 2023</p>
    </footer>
  )
}

export default Footer;