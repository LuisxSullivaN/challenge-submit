import React from 'react';
import styles from './Input.module.css';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  ...props
}) => <input type={type} className={styles[type]} {...props} />;


export default Input;
