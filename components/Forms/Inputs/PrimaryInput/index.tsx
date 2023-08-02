import styles from './style.module.scss'
import React, { FC } from 'react'

interface PrimaryInputProps {
  name?:string,
  id?:string,
  placeholder:string
}

const PrimaryInput: FC<PrimaryInputProps> = ({ placeholder }) => {
  return (
    <input className={styles.primaryInput} placeholder={placeholder}/>
  )
}

export default PrimaryInput;

