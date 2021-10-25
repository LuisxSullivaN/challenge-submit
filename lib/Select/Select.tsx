import React from 'react';
import styles from './Select.module.css';

type SelectType = React.FC<{label?: string} & React.SelectHTMLAttributes<HTMLSelectElement>> & {
  Option: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>>
};

export const Select: SelectType = ({children, label, ...props}) => (
  <label className={styles.label}>
    {label}
    <select className={styles.select} {...props}>
      {children}
    </select>
  </label>
);

Select.Option = ({children, ...props}) => (
  <option className={styles.option} {...props}>{children}</option>
);

export default Select;